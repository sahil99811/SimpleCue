import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducer";
import { addWorkout, setExercises } from "../slices/workoutSlice";


const useWorkout = () => {
    const dispatch=useDispatch()
    const workouts = useSelector((state: RootState) => state.workout.workouts);
    const getDailyExercise = (date: Date) => {
        console.log("funciton called");
        const res=workouts.filter(workout => {
            return workout.completedDays + workout.totalMissing !== workout.totalDays && 
                workout.completedDays !== workout.totalDays&&new Date(date) >= new Date(workout.startDate)&&new Date(workout.endDate)>=new Date(date);
        });
        dispatch(setExercises(res));
        return res
    };

    const getCompletedExercise = (date: Date) => {
        return workouts.filter(workout =>workout.state==='completed' || workout.completedDays + workout.totalMissing === workout.totalDays ||workout.completedDays === workout.totalDays ||new Date(date)>=new Date(workout.endDate) );
    };

    const getMissedExercise = () => {
        return workouts.filter(workout => workout.state==='missed' || workout.totalMissing > 0);
    };

    const getWorkouts = (date: Date, state: string) => {
        
        if (state === "active") {
            dispatch(setExercises(getDailyExercise(date)));
        } else if (state === "completed") {
            dispatch(setExercises(getCompletedExercise(date)));
        } else if (state === "missed") {
            dispatch(setExercises(getMissedExercise()))
        }
    };
    const updateTaskStatus = (index: number, status: 'done' | 'missed' | 'completed') => {
        const newWorkouts = workouts.map((workout) => {
            if (workout.id===index) {
                if (status === 'done') {
                    return { ...workout, completedDays: workout.completedDays + 1 };
                } else if (status === 'missed') {
                    return { ...workout, totalMissing: workout.totalMissing + 1, state: 'missed' };
                } else if (status === 'completed') {
                    return { ...workout, state: 'completed',completedDays:workout.totalDays-workout.totalMissing };
                }
            }
            return workout;
        });
        dispatch(addWorkout(newWorkouts));
    };
    return { getWorkouts,updateTaskStatus };
};

export default useWorkout;
