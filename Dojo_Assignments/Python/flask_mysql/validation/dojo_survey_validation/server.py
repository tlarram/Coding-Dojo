from flask_app import app
from flask_app.controllers import  dojos_controller
DATABASE='dojo_survey_schema'

if __name__=="__main__":   
    app.run(debug=True)   