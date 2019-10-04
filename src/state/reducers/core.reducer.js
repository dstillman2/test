export function reducer(state = {}, action) {
  switch (action.type) {
    case 'change-gears': {
      return {...state, numberOfGears: action.data };
    }
    default:
      return state;
  }
}

export default reducer;