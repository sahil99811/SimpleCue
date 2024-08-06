import { combineReducers } from '@reduxjs/toolkit';
import workoutReducer from '../slices/workoutSlice';
export type RootState = ReturnType<typeof rootReducer>;
// Combine the individual reducers into a single root reducer
const rootReducer = combineReducers({
  workout: workoutReducer
});

// Export the combined root reducer as the default export
export default rootReducer;


