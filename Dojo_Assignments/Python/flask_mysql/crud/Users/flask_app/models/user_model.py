# import the function that will return an instance of a connection
from flask_app.config.mysqlconnection import connectToMySQL
DATABASE= "users_schema"
# model the class after the friend table from our database
class USER:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        # self.updated_at = data['updated_at']
    # Now we use class methods to query our database
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        result = connectToMySQL(DATABASE).query_db(query)
        all_users = []
        for row_from_db in result:
            user_instance = cls(row_from_db)
            all_users.append(user_instance)
        return all_users
    

    @classmethod
    def create(cls, data):
        query= "INSERT INTO users (first_name, last_name, email) VALUES (%(first_name)s, %(last_name)s, %(email)s);"
        result= connectToMySQL(DATABASE).query_db(query,data)
        return result

    @classmethod
    def get_one(cls,data):
        query = 'SELECT * FROM users WHERE id=%(id)s';
        result= connectToMySQL(DATABASE).query_db(query,data)
        if result:
            user_instance = cls(result[0])
            return user_instance
        return result

    @classmethod
    def update(cls,data):
        query= "UPDATE users SET first_name = %(first_name)s, last_name = %(last_name)s, email = %(email)s  WHERE id= %(id)s;"
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def destroy(cls,data):
        query  = "DELETE FROM users WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query,data)