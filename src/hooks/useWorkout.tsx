import { useSelector } from "react-redux";
import { RootState } from "../reducer";



const useWorkout = () => {
    const workouts = useSelector((state: RootState) => state.workout.workouts);
    console.log(workouts);
    const getDailyExercise = (date: Date) => {
        const res=workouts.filter(workout => {
            return workout.state === 'active' &&
                date >= workout.startDate && date <= workout.endDate &&
                (workout.completedDays + workout.totalMissing !== workout.totalDays || 
                workout.completedDays !== workout.totalDays);
        });
        console.log(res)
        return res
    };

    const getCompletedExercise = (date: Date) => {
        return workouts.filter(workout =>workout.state==='completed' || workout.completedDays === workout.totalDays ||date>=new Date(workout.endDate) );
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
