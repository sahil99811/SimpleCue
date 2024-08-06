import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducer";
import { addWorkout } from "../slices/workoutSlice";
import { useEffect } from "react";



const useWorkout = () => {
    const dispatch=useDispatch()
    const workouts = useSelector((state: RootState) => state.workout.workouts);
    const getDailyExercise = (date: Date) => {
        const res=workouts.filter(workout => {
            console.log(date,workout.startDate)
            return workout.state === 'active' &&(workout.completedDays + workout.totalMissing !== workout.totalDays || 
                workout.completedDays !== workout.totalDays)&&new Date(date) >= new Date(workout.startDate)&&new Date(workout.endDate)>=new Date(date);
        });
        console.log(res)
        return res
    };

    const getCompletedExercise = (date: Date) => {
        return workouts.filter(workout =>workout.state==='completed' || workout.completedDays === workout.totalDays ||new Date(date)>=new Date(workout.endDate) );
    };

    const getMissedExercise = () => {
        return workouts.filter(workout => workout.state==='missed' || workout.totalMissing > 0);
    };

    const getWorkouts = (date: Date, state: string) => {
        
        if (state === "active") {
            return getDailyExercise(date);
        } else if (state === "completed") {
            return getCompletedExercise(date);
        } else if (state === "missed") {
            return getMissedExercise();
        }
        return [];
    };
    const updateTaskStatus = (index: number, status: 'done' | 'missed' | 'completed') => {
        const newWorkouts = workouts.map((workout, i) => {
            if (i === index) {
                if (status === 'done') {
                    return { ...workout, completedDays: workout.completedDays + 1 };
                } else if (status === 'missed') {
                    return { ...workout, totalMissing: workout.totalMissing + 1, state: 'missed' };
                } else if (status === 'completed') {
                    return { ...workout, state: 'completed' };
                }
            }
            return workout;
        });
        dispatch(addWorkout(newWorkouts));
    };
    return { getWorkouts,updateTaskStatus };
};

export default useWorkout;
