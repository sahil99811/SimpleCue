import { useSelector } from "react-redux";
import { RootState } from "../reducer";



const useWorkout = () => {
    const workouts = useSelector((state: RootState) => state.workout.workouts);
    const getDailyExercise = (date: Date) => {
        const res=workouts.filter(workout => {
            console.log(new Date(date) <= new Date(workout.startDate)&&new Date(workout.endDate)>=new Date(date))
            return workout.state === 'active' &&(workout.completedDays + workout.totalMissing !== workout.totalDays || 
                workout.completedDays !== workout.totalDays)&&new Date(date) <= new Date(workout.startDate)&&new Date(workout.endDate)>=new Date(date);
        });
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
    
    return { getWorkouts };
};

export default useWorkout;
