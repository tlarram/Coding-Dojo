from flask_app import  app
from flask import render_template, redirect, session, request, flash 
from flask_app.models.user_model import User
from flask_bcrypt import Bcrypt

bcrypt=Bcrypt(app)
# bcrypt.generate_password_hash(password_string)
# bcrypt.check_password_hash(hashed_password, password_string)



@app.route('/')
def index():
    if "user_id" in session:
        return redirect('welcome')
    return render_template('index.html')

@app.route('/register', methods=['POST'])
def register():
    if not User.validate(request.form):
        return redirect('/')
    hashed_pw =bcrypt.generate_password_hash(request.form['password'])
    data={
        **request.form,
        'password': hashed_pw
    }
    session['user_id'] = User.save(data)
    return redirect('/welcome')

@app.route('/welcome')
def welcome():
    if not "user_id" in session:
        return redirect('/')
    return render_template("welcome.html", users=User.get_all())

@app.route('/destroy/<int:id>')
def destroy_user(id):
    data = {
        "id": id
    }
    User.destroy_user(data)
    return redirect('/welcome')

@app.route("/logout")
def logout():
    del session['user_id']
    return redirect('/')

@app.route('/user/login', methods=['POST'])
def login():
    data= {
        'email' : request.form['email']
    }
    user_from_db=User.get_by_email(data)
    if not user_from_db:
        flash("Invalid Credintials", "log")
        return redirect('/')
    if not bcrypt.check_password_hash(user_from_db.password, request.form['password']):
        flash("Invalid Credintials", "log")
        return redirect('/')
    session['user_id'] = user_from_db.id
    return redirect(('/welcome'))
    
