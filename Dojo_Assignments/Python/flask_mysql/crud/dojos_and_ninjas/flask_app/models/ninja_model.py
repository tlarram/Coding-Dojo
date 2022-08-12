from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import dojo_model

DATABASE='dojos_ninjas_schema'
class Ninja:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create_ninja(cls, data):
        query= "INSERT INTO ninjas (first_name, last_name, age, dojo_id) VALUES (%(first_name)s, %(last_name)s, %(age)s, %(dojo_id)s);"
        result= connectToMySQL(DATABASE).query_db(query,data)
        return result

    @classmethod
    def get_one_ninja(cls,data):
        query = 'SELECT * FROM ninjas WHERE id=%(id)s';
        result= connectToMySQL(DATABASE).query_db(query,data)
        if result:
            user_instance = cls(result[0])
            return user_instance
        return result

    @classmethod
    def update(cls,data):
        query= "UPDATE ninjas SET first_name = %(first_name)s, last_name = %(last_name)s, email = %(age)s  WHERE id= %(id)s;"
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def destroy(cls,data):
        query  = "DELETE FROM ninjas WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query,data)