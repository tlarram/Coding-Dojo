from flask import Flask

app = Flask(__name__)
DATABASE="users"
app.secret_key = "shhhhhh"