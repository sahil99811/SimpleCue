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


interface WorkoutState {
    workouts: Workout[];
}

const initialState: WorkoutState = {
    workouts: localStorage.getItem('workouts') ? JSON.parse(localStorage.getItem('workouts') as string) : []
};


const workoutSlice = createSlice({
    name: 'workout',
    initialState, 
    reducers: {
        addWorkout(state, action: PayloadAction<Workout[]>) {
            state.workouts = action.payload; 
            localStorage.setItem('workouts', JSON.stringify(state.workouts)); 
        }
    }
});

export const { addWorkout} = workoutSlice.actions;
export default workoutSlice.reducer;
