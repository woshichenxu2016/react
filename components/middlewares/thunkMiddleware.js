const thunkMiddleware = ({dispatch, getState}) => next => action => {
  if (Object.prototype.toString.call(action) === '[object Function]') {
    return action(dispatch);
  } else {
    return next(action);
  }
};

export default thunkMiddleware;
