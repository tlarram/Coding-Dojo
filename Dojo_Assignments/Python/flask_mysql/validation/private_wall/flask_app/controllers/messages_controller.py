from flask import render_template, session,flash,redirect, request
import re
from flask_bcrypt import Bcrypt
from flask_app import app
from flask_app.models.user_model import User
from flask_app.models.message_model import Message

bcrypt = Bcrypt(app)

@app.route('/post_message', methods=['POST'])
def post_message():
    if 'user_id' not in session:
        return redirect("/")
    print(request.form)
    data={
        "sender_id": request.form['sender_id'],
        "reciever_id": request.form['reciever_id'],
        "message": request.form['message']
    }
    Message.save_message(data)
    return redirect("/dashboard")

@app.route("/delete/message/<int:id>")
def delete_message(id):
    data = {
        'id':id
    }
    Message.delete(data)
    return redirect('/dashboard')