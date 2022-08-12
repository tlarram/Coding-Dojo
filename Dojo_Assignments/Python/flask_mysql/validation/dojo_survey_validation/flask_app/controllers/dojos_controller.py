from flask_app import app
from flask import render_template, redirect, session, request
from flask_app.models.dojo_model import Dojo

@app.route('/')         
def index():
    return render_template("index.html")

@app.route('/results', methods=['POST'])
def results():
    print(request.form)
    session['name'] = request.form['name']
    session['location'] = request.form['location']
    session['language'] = request.form['language']
    session['comment'] = request.form['comment']
    if Dojo.is_valid(request.form):
        Dojo.save(request.form)
        return redirect('/details')
    return redirect ('/')

@app.route('/details')
def details():
    name = session['name']
    dojo_location = session['location']
    favorite_language= session['language']
    comment = session['comment']
    return render_template("checkout.html", name=name,dojo_location=dojo_location, favorite_language=favorite_language,comment=comment)

@app.route('/reset')
def reset():
    session.clear()
    return redirect('/')