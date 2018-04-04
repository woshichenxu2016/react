const LOADING = 'loading';
const LOADED = 'loaded';
const FAIL = 'fail';
const isPromise = (obj) => typeof obj.then === 'function';

const promiseMiddleware = ({dispatch}) => next => action => {
  if (action.payload && isPromise(action.payload)) {
    dispatch({...action, state: LOADING, payload: null});
    return action.payload.then(data => {
      dispatch({...action, state: LOADED, payload: data});
    }).catch(() => {
      dispatch({...action, state: FAIL, payload: null});
    });
  } else {
    return next(action);
  }
};

export default promiseMiddleware;
