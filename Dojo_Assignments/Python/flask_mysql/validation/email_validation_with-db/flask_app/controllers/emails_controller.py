from flask_app import app
from flask import render_template, redirect, session, request, flash
from flask_app.models.email_model import Email

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register', methods=['POST'])
def register():
    if not Email.validate(request.form):
        return redirect('/')
    Email.save(request.form)
    return redirect('/results')

@app.route('/results')
def results():
    flash('You have entered an email successfully!', 'success')
    return render_template("success.html", emails=Email.get_all())

@app.route('/destroy/<int:id>')
def destroy_email(id):
    data = {
        "id": id
    }
    Email.destroy_email(data)
    return redirect('/results')