from flask_app.config.mysqlconnection import connectToMySQL
import re
from flask_app import DATABASE

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

