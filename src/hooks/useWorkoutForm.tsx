import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { RootState } from '../reducer'; // Adjust the import path according to your project structure
import {addWorkout} from '../slices/workoutSlice'; // Adjust the import path according to your project structure

interface Workout {
  title?: string;
  description?: string;
  frequency?: string;
  duration?: string;
  startDate?: Date;
}
// Define the shape of the form state
interface FormState {
  title: string;
  description: string;
  frequency: string;
  duration: string;
}

// Define the props for the hook
interface UseWorkoutFormProps {
  closeModal: () => void;
  workout?:object;
}

// Define the return type of the hook
interface UseWorkoutFormReturn {
  formState: FormState;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>,date:string) => void;
  editWorkout:(e: React.FormEvent<HTMLFormElement>,i:number)=>void
}

const useWorkoutForm = (closeModal: UseWorkoutFormProps['closeModal'],workout?:Workout): UseWorkoutFormReturn => {
  const dispatch = useDispatch();
  const {workouts}=useSelector((state:RootState)=>state.workout)
  console.log(workouts);
  const [formState, setFormState] = useState<FormState>({
    title:workout?.title ||'',
    description:workout?.description||'',
    frequency:workout?.frequency|| '',
    duration:workout?.duration|| ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>,date:string) => {
    e.preventDefault();
    if (!formState.title || !formState.description || !formState.frequency ||!formState.duration) {
      toast.error("All fields are required...");
      return;
    }
    const freq=Number(formState.frequency);
    const dur=Number(formState.duration);
    const endDate=new Date(date);
    endDate.setDate(endDate.getDate()+(Number(formState.duration)*7));
    const weeks=[];
    for(let i=0;i<dur;i++){
      weeks.push(0);
    }
    const newObj={
      title:formState.title,
      frequency:formState.frequency,
      duration:formState.duration,
      startDate:new Date(date),
      description:formState.description,
      id:workouts.length,
      endDate,
      totalDays:freq*dur,
      completedDays:0,
      totalMissing:0,
      state:"active"
    }
    const newWorkouts=[...workouts,newObj];
    dispatch(addWorkout(newWorkouts));
    console.log(formState);
    setFormState({
      title: '',
      description: '',
      frequency: '',
      duration: ''
    });
    closeModal();
  };
  const editWorkout = (e:React.FormEvent<HTMLFormElement>,id:number) => {
    e.preventDefault();
    console.log("edit button called")
    const newWorkouts = workouts.map((workout) => {
      if (workout.id === id) {
        const endDate = new Date(workout.startDate);
        endDate.setDate(endDate.getDate() + (Number(formState.duration) * 7));
        return {
          ...workout,
          title: formState.title || workout.title,
          duration: formState.duration || workout.duration,
          frequency: formState.frequency || workout.frequency,
          description: formState.description || workout.description,
          endDate,
          totalDays:Number(formState.duration)*Number(formState.frequency)
        };
      }
      return workout;
    });
  
    dispatch(addWorkout(newWorkouts));
    closeModal();
  };
  
  return {
    formState,
    handleChange,
    handleSubmit,
    editWorkout
  };
};

export default useWorkoutForm;
