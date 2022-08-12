from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import ninja_model
DATABASE='dojos_ninjas_schema'



class Dojo:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.ninjas=[]
    
    @classmethod
    def get_all(cls,):
        query = "SELECT * FROM dojos;"
        result = connectToMySQL(DATABASE).query_db(query)
        all_dojos = []
        for row_from_db in result:
            dojo_instance = cls(row_from_db)
            all_dojos.append(dojo_instance)
        return all_dojos

    @classmethod
    def create(cls, data):
        query= "INSERT INTO dojos (name) VALUES (%(name)s);"
        result= connectToMySQL(DATABASE).query_db(query,data)
        return result

    @classmethod
    def get_one(cls,data):
        # query = 'SELECT dojos.id, dojos.name, ninjas.first_name, ninjas.last_name, ninjas.age FROM ninjas LEFT JOIN dojos ON dojos.id=dojo_id WHERE dojos.id=%(id)s;'
        query='SELECT * FROM dojos LEFT JOIN ninjas ON ninjas.dojo_id=dojos.id WHERE dojos.id= %(id)s;'
        result= connectToMySQL(DATABASE).query_db(query,data)
        if result:
            dojo_instance = cls(result[0])
            # ninja_list=[]
            for row in result:
                ninja_data ={
                    "id":row['ninjas.id'],
                    "first_name":row['first_name'],
                    "last_name":row['last_name'],
                    "age":row['age'],
                    "created_at":row['ninjas.created_at'],
                    "updated_at":row['ninjas.updated_at']
                }
                
            #     ninja_instance= ninja_model.Ninja(ninja_data)
            #     ninja_list.append(ninja_instance)
            # dojo_instance.ninjas_list = ninja_list
            dojo_instance.ninjas.append(ninja_data)
            return dojo_instance
        return result

    @classmethod
    def update(cls,data):
        query= "UPDATE dojos SET name = %(name)s  WHERE id= %(id)s;"
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def destroy(cls,data):
        query  = "DELETE FROM dojos WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query,data)