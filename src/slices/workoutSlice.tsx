import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the shape of a workout
interface Workout {
    id: number;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    totalDays: number;
    frequency: string;
    completedDays: number;
    totalMissing: number;
    duration: string;
    state: string;
}

// Define the state shape for the workout slice
export interface WorkoutState { // Export WorkoutState
    workouts: Workout[];
    exercises: Workout[];
}

const initialState: WorkoutState = {
    workouts: localStorage.getItem('workouts') ? JSON.parse(localStorage.getItem('workouts') as string) : [],
    exercises: []
};

const workoutSlice = createSlice({
    name: 'workout',
    initialState,
    reducers: {
        addWorkout(state, action: PayloadAction<Workout[]>) {
            state.workouts = action.payload;
            localStorage.setItem('workouts', JSON.stringify(state.workouts));
        },
        setExercises(state, action: PayloadAction<Workout[]>) {
            state.exercises = action.payload;
        }
    }
});

export const { addWorkout, setExercises } = workoutSlice.actions;
export default workoutSlice.reducer;
