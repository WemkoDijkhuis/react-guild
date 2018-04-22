const actionTypes = {
  SAVE_LISTS: 'groceries/SaveLists'
};

export const saveLists = (payload) => ({
  type: actionTypes.SAVE_LISTS,
  payload
});

const groceriesReducer = (state, action) => {
  switch (action.type) {
  case actionTypes.SAVE_LISTS: {
    return { ...state, lists: action.payload.lists };
  }
  default:
    return state;
  }
};

export default groceriesReducer;