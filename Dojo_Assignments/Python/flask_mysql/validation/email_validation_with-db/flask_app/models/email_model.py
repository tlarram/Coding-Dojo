from flask_app.config.mysqlconnection import connectToMySQL
import re


EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
from flask import flash
DATABASE="email_schema"

class Email:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def save(cls, data):
        query= "INSERT INTO emails (email) VALUES (%(email)s);"
        result= connectToMySQL(DATABASE).query_db(query,data)
        return result

    @classmethod
    def get_all(cls):
        query= 'SELECT * FROM emails;'
        result=connectToMySQL(DATABASE).query_db(query)
        emails = []
        for row in result:
            emails.append(cls(row))
        return emails

    @classmethod
    def destroy_email(cls,data):
        query='DELETE FROM emails WHERE id = %(id)s;'
        result= connectToMySQL(DATABASE).query_db(query,data)
        return result






    @staticmethod
    def validate(email):
        is_valid = True
        query= "SELECT * FROM emails WHERE email = %(email)s;"
        result= connectToMySQL(DATABASE).query_db(query,email)
        if len(result) >= 1:
            flash('Email already taken')
            is_valid= False
        if not EMAIL_REGEX.match(email['email']): 
            flash("Invalid email address!")
            is_valid = False
        return is_valid
