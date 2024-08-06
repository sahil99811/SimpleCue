import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the shape of a workout
interface Workout {
    id: number;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    totalDays: number;
    frequency: number;
    completedDays: number;
    totalMissing: number;
    duration:number,
    state:string
}

// Define the shape of your state
interface WorkoutState {
    workouts: Workout[];
}

// Initial state for the workout slice
const initialState: WorkoutState = {
    workouts: localStorage.getItem('workouts') ? JSON.parse(localStorage.getItem('workouts') as string) : []
};

// Create the workout slice using Redux Toolkit's createSlice function
const workoutSlice = createSlice({
    name: 'workout', // Name of the slice
    initialState, // Initial state of the slice
    reducers: {
        // Reducer to set the workouts in the state
        addWorkout(state, action: PayloadAction<Workout[]>) {
            state.workouts = action.payload; // Set the workouts value from the action payload
            localStorage.setItem('workouts', JSON.stringify(state.workouts)); // Save to localStorage
        }
    }
});

// Export the setWorkouts action creator
export const { addWorkout} = workoutSlice.actions;

// Export the reducer as the default export
export default workoutSlice.reducer;
