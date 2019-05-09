// boilerplate for writing any middleware function
export default ({ dispatch }) => next => action => {
  // Check to see if tha action has 'promise' in its payload property
  // If it does then wait for it to resolve.
  // If it doesn't, send action to the next middleware.
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  action.payload.then(function(response) {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
