from flask_app import app
from flask import render_template, redirect, session, request
from flask_app.models.dojo_model import Dojo

@app.route('/')
def index():
    return redirect("/dojos")



# @app.route("/dojo/<int:id>")
# def readallninjasindojos():
#     all_ninjas = Ninja.get_all()
#     return render_template('dojo_with_ninjas.html',ninjas=all_ninjas)

@app.route("/dojo/<int:id>")
def read_all_ninjas_in_dojos(id):
    data ={ 
        "id":id
    }
    dojos=Dojo.get_one(data)
    print(dojos)
    return render_template("dojo_with_ninjas.html",dojos=Dojo.get_one(data))

@app.route('/dojos')
def readalldojos():
    all_dojos = Dojo.get_all()
    return render_template('dojos.html',dojos=all_dojos)

#post user data
@app.route('/dojos/create', methods=['POST'])
def create():
    Dojo.create(request.form)
    return redirect ("/")