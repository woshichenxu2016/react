const reducer = (state = {count: 100}, action) => {
  switch (action.type) {
    case 'multi':
      return {count: state.count * action.payload};
    case 'div':
      return {count: state.count / action.payload};
    case 'inc':
      return {count: state.count + action.payload};
    case 'dec':
      return {count: state.count - action.payload};
    default:
      return state;
  }
};

export default reducer;
