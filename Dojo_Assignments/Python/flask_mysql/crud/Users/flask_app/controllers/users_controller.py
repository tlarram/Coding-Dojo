from flask_app import app
from flask import render_template,redirect, session, request
from flask_app.models.user_model import USER

@app.route('/')
def index():
    return redirect('/users')

#ReadALLdojos
@app.route("/users")
def readall():
    all_users = USER.get_all()
    return render_template('read(all).html',users=all_users)

#Create a User
@app.route ('/user/new') #display route
def new_user_form():
    return render_template('create.html')

#post user data
@app.route('/user/create', methods=['POST'])
def create():
    print(request.form)
    user_id=USER.create(request.form)
    return redirect (f'/user/show/{user_id}')

#read one
@app.route('/user/show/<int:id>')
def read_one(id):
    data ={ 
        "id":id
    }
    return render_template("one_user.html",user=USER.get_one(data))

#UPDATE A USER
@app.route("/user/<int:id>/edit")
def edit_form_user(id):
    data ={ 
        "id":id
    }
    user = USER.get_one(data)
    return render_template("edit_user.html",user=user)



@app.route("/user/<int:id>/update", methods=['POST'])
def update_user(id):
    data ={
        "first_name": request.form['first_name'],
        "last_name": request.form['last_name'],
        "email": request.form['email'],
        "id":id
    }
    USER.update(data)
    return redirect("/users")

# Delete User
@app.route('/user/destroy/<int:id>')
def destroy(id):
    data ={
        'id': id
    }
    USER.destroy(data)
    return redirect('/users')