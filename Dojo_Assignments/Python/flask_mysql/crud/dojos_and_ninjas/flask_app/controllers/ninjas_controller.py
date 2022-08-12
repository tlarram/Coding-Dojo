from flask_app import app
from flask import render_template, redirect, session, request
from flask_app.models.ninja_model import Ninja
from flask_app.models.dojo_model import Dojo





#Create a User
@app.route ('/ninja/new') #display route
def new_user_form():
    all_dojos = Dojo.get_all()
    return render_template("new_ninja.html",dojos=all_dojos)

#post user data
@app.route('/ninja/create', methods=['POST'])
def create_ninja():
    print(request.form)
    Ninja.create_ninja(request.form)
    return redirect (f"/dojo/{request.form['dojo_id']}")