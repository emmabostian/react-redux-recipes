export const addRecipe = recipe => ({
  type: 'ADD_RECIPE',
  payload: recipe
});

export const deleteRecipe = recipe => ({
  type: 'DELETE_RECIPE',
  payload: recipe
});

export const editRecipe = recipe => ({
  type: 'EDIT_RECIPE',
  payload: recipe
});