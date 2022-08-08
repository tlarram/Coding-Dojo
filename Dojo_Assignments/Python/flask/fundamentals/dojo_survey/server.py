from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)

app.secret_key="fill out the form, you know geez is in the keyz"

@app.route('/')         
def index():
    return render_template("index.html")

@app.route('/results', methods=['POST'])
def results():
    print(request.form)
    session['name'] = request.form['name']
    session['Dojo Location'] = request.form['Dojo Location']
    session['Favorite Language'] = request.form['Favorite Language']
    session['Comment'] = request.form['Comment']
    return redirect ('/details')

@app.route('/details')
def details():
    name = session['name']
    dojo_location = session['Dojo Location']
    favorite_language= session['Favorite Language']
    comment = session['Comment']
    return render_template("checkout.html", name=name,dojo_location=dojo_location, favorite_language=favorite_language,comment=comment)

@app.route('/reset')
def reset():
    session.clear()
    return redirect('/')

if __name__=="__main__":   
    app.run(debug=True)   