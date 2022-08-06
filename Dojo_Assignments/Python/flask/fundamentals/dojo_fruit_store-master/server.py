from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)

app.secret_key="fruits for sale"
@app.route('/')         
def index():
    return render_template("index.html")

@app.route('/checkout', methods=['POST'])         
def checkout():
    print(request.form)
    session['strawberry'] = request.form['strawberry']
    session['raspberry'] = request.form['raspberry']
    session['apple'] = request.form['apple']
    session['first_name'] = request.form['first_name']
    session['last_name'] = request.form['last_name']
    session['student_id'] = request.form['student_id']
    count= int(request.form['strawberry']) + int(request.form['raspberry']) + int(request.form['apple'])
    print(f"Charging {request.form['first_name']} {request.form['last_name']} for {count}  fruits")
    return redirect("/checkoutdisplay")

@app.route('/checkoutdisplay')
def checkoutdisplay():
    strawberry = session['strawberry'] 
    raspberry = session['raspberry'] 
    apple = session['apple'] 
    first_name = session['first_name'] 
    last_name = session['last_name'] 
    student_id = session['student_id']
    return render_template("checkout.html",strawberry=strawberry, raspberry=raspberry,apple=apple,first_name=first_name,last_name=last_name,student_id=student_id)

@app.route('/fruits')         
def fruits():
    return render_template("fruits.html")

if __name__=="__main__":   
    app.run(debug=True)    