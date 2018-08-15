import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
  addRecipe,
  editRecipe,
  deleteRecipe
 } from "../store/actions";

import Recipe from './Recipe';
import Navigation from './Navigation';

class App extends Component {
  constructor() {
    super();
    this.selectNewRecipe = this.selectNewRecipe.bind(this);
    this.state = {
      recipes: [
        {
          title: 'Bagel',
          ingredients: [
            '1 Bagel',
            'Cream cheese'
          ],
          steps: [
            'Slice bagel in half',
            'Spread on cream cheese',
            'Enjoy!'
          ],
          id: 'bagel'
        },
        {
          title: 'Pizza',
          ingredients: [
            '1 Pizza Crust',
            '1 Jar of Pizza Sauce',
            '3 oz Part-Skim Mozerella Cheese'
          ],
          steps: [
            'Put sauce on crust',
            'Sprinkle mozarella cheese over sauce',
            'Bake at 350 degrees for 20 minutes'
          ],
          id: 'pizza'
        },
      ],
      selectedRecipe: ''
    }
  }

  selectNewRecipe(recipeId) {
    if(recipeId) {
      this.setState({
        ...this.state,
        selectedRecipe: recipeId
      });
    }
  }
  
  render() {
    let recipeToSelect;
    if(this.state.selectedRecipe) { 
      const filteredRecipes = this.state.recipes.filter((recipe) => recipe.id === this.state.selectedRecipe);  
      if(filteredRecipes.length > 0) { 
        recipeToSelect = filteredRecipes[0];
      }
    }
    return (
      <div className="App">
        <aside className='sidebar'>
          <h1 className='sidebar__title'>Recipe Book</h1>
          <Navigation 
            recipes={this.state.recipes}
            activeRecipe={this.state.selectedRecipe}
            recipeToSelect={this.selectNewRecipe}
          />
        </aside>
        {
          recipeToSelect ? 
            <Recipe
            recipe={recipeToSelect}
            editRecipe={this.props.editRecipe}
            deleteRecipe={this.props.deleteRecipe}
            />
            :
            null
        }
      </div>
    );
  }

  componentDidMount() {
    const recipeToShow = this.state.recipes[0].id || null;
    this.setState({
      ...this.state,
      selectedRecipe: recipeToShow
    });
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addRecipe: (recipe) => dispatch(addRecipe(recipe)),
  editRecipe: (recipe) => dispatch(editRecipe(recipe)),
  deleteRecipe: (recipeId) => dispatch(deleteRecipe(recipeId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
