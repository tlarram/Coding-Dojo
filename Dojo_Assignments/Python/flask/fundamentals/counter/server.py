from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)

app.secret_key="fruits for sale"

@app.route('/')         
def index():
    if "count" not in session:
        session['count'] = 1
    else:
        session['count'] += 1
    return render_template("index.html")

@app.route('/destroy_session')
def destroy():
    session.pop('count')
    return redirect('/')

@app.route('/plus')
def plus2():
    if "count" not in session:
        session['count'] = 1
    else:
        session['count'] += 2
    return render_template("index.html")

if __name__=="__main__":   
    app.run(debug=True)   