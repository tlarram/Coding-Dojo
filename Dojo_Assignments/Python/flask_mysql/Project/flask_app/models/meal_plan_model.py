from flask_app.config.mysqlconnection import connectToMySQL
import re
from flask_app import DATABASE
from flask_app.models import user_model
from flask_app.models import recipes_model

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
from flask import flash


class Meal_Plan:
    def __init__(self, data):
        self.id = data['id']
        self.planned_cook_date = data['planned_cook_date']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def save_meal_plan(cls, data):
        query= "INSERT INTO meal_plans (planned_cook_date) VALUES (%(planned_cook_date)s);"
        result= connectToMySQL(DATABASE).query_db(query,data)
        return result

    @classmethod
    def update_meal_plan(cls,data):
        query= "UPDATE  meal_plans SET planned_cook_date= %(planned_cook_date)s WHERE id= %(id)s;"
        return connectToMySQL(DATABASE).query_db(query,data)
    
    