from flask import Flask, render_template 

app = Flask(__name__)    

@app.route('/')         
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!'

@app.route('/Dojo') # Return the string Dojo
def success():
    return "Dojo"

@app.route('/say/<string:name>')
def say(name):
    return f"Hi {name}!"

@app.route('/repeat/<int:num>/<string:words>')
def repeat(num,words):
    return f"repeat {num* words}"

# @app.errorhandler(404)
# def not_found(e):
#     return 'Sorry! No response. Try again.'

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.