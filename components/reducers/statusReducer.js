const statusReducer = (state = {count: 0}, action) => {
  switch (action.state) {
    case 'loading':
      return {count: state.count, ...action};
    case 'loaded':
      return {count: state.count + action.payload, ...action};
    case 'fail':
      return {count: state.count, ...action};
    default:
      return {count: state.count};
  }
};

export default statusReducer;
