from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
DATABASE='dojo_survey_schema'


class Dojo:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.comment = data['comment']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    @classmethod
    def save(cls,data):
        query = "INSERT into dojos (name,location,language,comment) VALUES (%(name)s,%(location)s,%(language)s,%(comment)s);"
        return connectToMySQL(DATABASE).query_db(query,data)

    @classmethod
    def get_last_survey(cls):
        query = "SELECT * FROM dojos ORDER BY dojos.id DESC LIMIT 1;"
        results = connectToMySQL(DATABASE).query_db(query)
        return Dojo(results[0])

    @staticmethod
    def is_valid(dojos):
        is_valid = True
        if len(dojos['name']) < 3:
            is_valid = False
            flash("Full Name Please")
        if len(dojos['location']) < 1:
            is_valid = False
            flash("Please Choose Location")
        if len(dojos['language']) < 1:
            is_valid = False
            flash("Please Choose Language")
        if len(dojos['comment']) < 3:
            is_valid = False
            flash("Comment is required")
        return is_valid