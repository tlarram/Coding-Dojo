from flask import render_template, session,flash,redirect, request
import re
from flask_bcrypt import Bcrypt
from flask_app import app
from flask_app.models.user_model import User
from flask_app.models.recipes_model import Recipe


@app.route('/meal_plan/new')
def new_meal_plan():
    if not "user_id" in session:
        return redirect('/')
    user= User.get_by_id({'id':session['user_id']})
    return render_template('meal_plan.html', user=user)

@app.route('/meal_plan/create', methods=['POST']) #action
def create_meal_plan():
    if not "user_id" in session:
        return redirect('/')
    if not Recipe.validator(request.form):
        return redirect('/meal_plan/new')
    data={
            **request.form,
            'user_id': session['user_id']
    }
    Recipe.save_recipe(data)
    return redirect('/meal_plan/new')