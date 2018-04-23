const actionTypes = {
  SAVE_LISTS: 'groceries/SaveLists',
  SELECT_LIST: 'groceries/SelectList'
};

export const saveLists = (payload) => ({
  type: actionTypes.SAVE_LISTS,
  payload
});

export const selectList = (payload) => ({
  type: actionTypes.SELECT_LIST,
  payload
});

const groceriesReducer = (state, action) => {
  switch (action.type) {
  case actionTypes.SAVE_LISTS: {
    return { ...state, lists: action.payload.lists };
  }
  case actionTypes.SELECT_LIST: {
    return {
      ...state,
      groceries: state.lists
        .find(list => list.id.toString() === action.payload.id)
        .groceries
    };
  }
  default:
    return state;
  }
};

export default groceriesReducer;