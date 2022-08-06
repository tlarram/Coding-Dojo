from flask import Flask, render_template

app = Flask(__name__)

@app.route('/play')
def play():
    return render_template("index.html", box="hello", times=3)

@app.route('/play/<int:times>')
def repeat(times):
    return render_template("index.html",times=times)

@app.route('/play/<int:times>/<string:color>')
def repeatcolors(times,color):
    return render_template("index.html",times=times, color=color)

if __name__=="__main__":
    app.run(debug=True)