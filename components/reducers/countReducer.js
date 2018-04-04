const countReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'inc':
      return {count: state.count + action.payload};
    case 'dec':
      return {count: state.count - action.payload};
    default:
      return state;
  }
};

export default countReducer;
