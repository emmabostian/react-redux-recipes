import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Recipe extends Component {
  constructor() {
    super();
    this.editRecipe = this.editRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }
  render() {
    const { title, ingredients, steps } = this.props.recipe;
    const ingredientsList = ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>);
    const stepsList = steps.map((step, i) => <li key={i}>{step}</li>);
    return (
      <div className="Recipe">
        <h2 className="Recipe__title">{title}</h2>
        <h3 className="Recipe__sub-title">Ingredients</h3>
        <ul className="Recipe__ingredients">
          {ingredientsList}
        </ul>
        <h3 className="Recipe__sub-title">Steps</h3>
        <ol className="Recipe__steps">
          {stepsList}
        </ol>
        <button onClick={this.editRecipe}>Edit Recipe</button>
        <button onClick={this.deleteRecipe}>Delete Recipe</button>
      </div>
    );
  }

  editRecipe() {
    this.props.editRecipe(this.props.recipe);
  }

  deleteRecipe() {
    this.props.deleteRecipe(this.props.recipe.id);
  }
}

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired
};

export default Recipe;
