import { combineReducers } from '@reduxjs/toolkit'; // Import combineReducers to combine multiple reducers
import workoutReducer from '../slices/workoutSlice'; // Import the workout slice reducer

// Define the type for the root state based on the rootReducer
export type RootState = ReturnType<typeof rootReducer>;

// Combine the individual reducers into a single root reducer
const rootReducer = combineReducers({
  workout: workoutReducer // Add the workout reducer under the 'workout' key
});

// Export the combined root reducer as the default export
export default rootReducer;
