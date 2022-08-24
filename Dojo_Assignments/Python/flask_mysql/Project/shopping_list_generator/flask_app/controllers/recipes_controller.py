from flask import render_template, session,flash,redirect, request
import re
from flask_bcrypt import Bcrypt
from flask_app import app
from flask_app.models.user_model import User
from flask_app.models.recipes_model import Recipe
import requests
url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/"
headers = {
  'x-rapidapi-host': "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  'x-rapidapi-key': "82582ef887msh04c9754b6c988d6p137b9ajsn335039a21fc3",
}
random_joke = "food/jokes/random"
find = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients"
randomFind = "recipes/random"

bcrypt = Bcrypt(app)

@app.route('/recipe/new')
def new_recipe_form():
    if not "user_id" in session:
        return redirect('/')
    user= User.get_by_id({'id':session['user_id']})
    return render_template('new_recipe.html', user=user)

@app.route('/recipe/create', methods=['POST']) #action
def create_recipe():
    if not "user_id" in session:
        return redirect('/')
    if not Recipe.validator(request.form):
        return redirect('/recipe/new')
    data={
            **request.form,
            'user_id': session['user_id']
    }
    Recipe.save_recipe(data)
    return redirect('/welcome')

@app.route('/recipe/<int:id>/edit')
def update_recipe_form(id):
    if not "user_id" in session:
        return redirect('/')
    recipe= Recipe.get_by_id({'id':id})
    return render_template('edit_recipe.html', recipe=recipe)

@app.route('/recipe/<int:id>/update', methods=['POST']) #action
def update_recipe(id):
    if not "user_id" in session:
        return redirect('/')
    if not Recipe.validator(request.form):
        return redirect(f'/recipe/{id}/edit')
    data={
        **request.form,
        'id':id
    }
    Recipe.update(data)
    return redirect('/welcome')

@app.route('/recipe/<int:id>/delete')
def delete_party(id):
    if not "user_id" in session:
        return redirect('/')
    data={
        'id':id
    }
    deleted=Recipe.get_by_id(data)
    if not session['user_id'] == deleted.user_id:
        flash("Quit tryiong to delete other people's stuff")
        return redirect('/')
    Recipe.delete(data)
    return redirect("/welcome")

@app.route("/recipe/<int:id>/view")
def show_one_recipe(id):
    if not "user_id" in session:
        return redirect('/')
    data={
        'id':id
    }
    user= User.get_by_id({'id':session['user_id']})
    recipe =Recipe.get_by_id(data)
    return render_template("recipes.html", recipe=recipe, user=user)

@app.route('/joke')
def search_page():
    joke_response = str(requests.request("GET", url + random_joke, headers=headers).json()['text'])
    return render_template('search.html', joke=joke_response)

@app.route('/recipes')
def get_recipes():
    if (str(request.args['ingredients']).strip() != ""):
    # If there is a list of ingridients -> list
        querystring = {"ingredients":request.args['ingredients'],"number":"5","ignorePantry":"true","ranking":"1"}
        response = requests.request("GET", find, headers=headers, params=querystring).json()
        return render_template('apirecipes.html', recipes=response)
    else:
    # Random recipes
        querystring = {"number":"5"}
        response = requests.request("GET", url + randomFind, headers=headers, params=querystring).json()
        print(response)
        return render_template('apirecipes.html', recipes=response['recipes'])



