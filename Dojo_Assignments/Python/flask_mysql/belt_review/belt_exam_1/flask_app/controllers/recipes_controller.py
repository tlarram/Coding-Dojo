from flask import render_template, session,flash,redirect, request
import re
from flask_bcrypt import Bcrypt
from flask_app import app
from flask_app.models.user_model import User
from flask_app.models.recipes_model import Recipe

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
