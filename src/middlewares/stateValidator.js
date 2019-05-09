import tv4 from 'tv4';
import stateSchema from './stateSchema';

// boilerplate for writing any middleware function
export default ({ dispatch, getState }) => next => action => {
  next(action);

  console.log('IN!!!!!!!');

  if (!tv4.validate(getState(), stateSchema)) {
    console.warn('Invalid state schema detected.');
  }
};
