from flask_app.config.mysqlconnection import connectToMySQL
import re
from flask_app import DATABASE
from datetime import datetime
import math
from flask_app.models import user_model
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
from flask import flash

class Message:
    def __init__(self, data):
        self.id = data['id']
        self.message = data['message']
        self.sender_id = data['sender_id']
        self.sender= data['sender']
        self.reciever_id = data['reciever_id']
        self.reciever = data['reciever']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    def time_span(self):
        now = datetime.now()
        delta = now - self.created_at
        print(delta.days)
        print(delta.total_seconds())
        if delta.days > 0:
            return f"{delta.days} days ago"
        elif (math.floor(delta.total_seconds() / 60)) >= 60:
            return f"{math.floor(math.floor(delta.total_seconds() / 60)/60)} hours ago"
        elif delta.total_seconds() >= 60:
            return f"{math.floor(delta.total_seconds() / 60)} minutes ago"
        else:
            return f"{math.floor(delta.total_seconds())} seconds ago"

    @classmethod
    def save_message(cls, data):
            query= "INSERT INTO messages (message, sender_id, reciever_id) VALUES (%(message)s, %(sender_id)s, %(reciever_id)s);"
            return connectToMySQL(DATABASE).query_db(query,data)
            


    @classmethod
    def get_user_messages(cls,data):
            query = "SELECT users.first_name as sender, users2.first_name as reciever, messages.* FROM users LEFT JOIN messages ON users.id = messages.sender_id LEFT JOIN users as users2 ON users2.id = messages.reciever_id WHERE users2.id =  %(id)s"
            results= connectToMySQL(DATABASE).query_db(query,data)
            messages =[]
            if results:
                for message in results:
                    messages.append(cls(message))
            return messages


    @classmethod
    def delete(cls, data):
        query = "DELETE FROM messages WHERE id= %(id)s"
        return connectToMySQL(DATABASE).query_db(query,data)

    @staticmethod
    def validator(form_data):
        is_valid= True
        if len(form_data['name']) <1:
            flash('Title Required')
            is_valid = False
        if len(form_data['description']) <1:
            flash('Description Required')
            is_valid = False
        if len(form_data['sender']) <1:
            flash('sender Required')
            is_valid = False
        if len(form_data['reciever']) <1:
            flash('Date Required')
            is_valid = False
    
        return is_valid