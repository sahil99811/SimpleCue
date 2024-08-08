import { useDispatch, useSelector } from "react-redux"; // Import hooks for dispatching actions and selecting state
import { RootState } from "../reducer"; // Import RootState type for Redux store state
import { addWorkout, setExercises } from "../slices/workoutSlice"; // Import action creators for workouts

const useWorkout = () => {
    const dispatch = useDispatch(); // Get the dispatch function from Redux
    const workouts = useSelector((state: RootState) => state.workout.workouts); // Get workouts from the Redux store

    // Function to get daily exercises based on the date
    const getDailyExercise = (date: Date) => {
        const res = workouts.filter(workout => {
            console.log(workout.totalDays, workout.totalMissing, workout.completedDays); // Debugging statement
            return workout.completedDays + workout.totalMissing !== workout.totalDays && 
                workout.completedDays !== workout.totalDays &&
                new Date(date) >= new Date(workout.startDate) &&
                new Date(workout.endDate) >= new Date(date);
        });
        dispatch(setExercises(res)); // Dispatch action to set exercises in the store
        return res; // Return the filtered exercises
    };

    // Function to get completed exercises based on the date
    const getCompletedExercise = (date: Date) => {
        return workouts.filter(workout =>
            workout.state === 'completed' || 
            workout.completedDays + workout.totalMissing === workout.totalDays ||
            workout.completedDays === workout.totalDays ||
            new Date(date) >= new Date(workout.endDate)
        );
    };

    // Function to get missed exercises
    const getMissedExercise = () => {
        return workouts.filter(workout =>
            workout.state === 'missed' || workout.totalMissing > 0
        );
    };

    // Function to get workouts based on state and date
    const getWorkouts = (date: Date, state: string) => {
        if (state === "active") {
            dispatch(setExercises(getDailyExercise(date))); // Set daily exercises in the store
        } else if (state === "completed") {
            dispatch(setExercises(getCompletedExercise(date))); // Set completed exercises in the store
        } else if (state === "missed") {
            dispatch(setExercises(getMissedExercise())); // Set missed exercises in the store
        }
    };

    // Function to update the status of a workout task
    const updateTaskStatus = (index: number, status: 'done' | 'missed' | 'completed') => {
        const newWorkouts = workouts.map((workout) => {
            if (workout.id === index) {
                if (status === 'done') {
                    return { ...workout, completedDays: workout.completedDays + 1 }; // Increment completedDays
                } else if (status === 'missed') {
                    return { ...workout, totalMissing: workout.totalMissing + 1, state: 'missed' }; // Update totalMissing and state
                } else if (status === 'completed') {
                    return { ...workout, state: 'completed', completedDays: workout.totalDays - workout.totalMissing }; // Set state to completed and update completedDays
                }
            }
            return workout; // Return unchanged workout if id does not match
        });
        console.log(newWorkouts); // Debugging statement
        dispatch(addWorkout(newWorkouts)); // Dispatch action to update workouts in the store
    };

    return { getWorkouts, updateTaskStatus }; // Return functions for external use
};

export default useWorkout; // Export the custom hook
