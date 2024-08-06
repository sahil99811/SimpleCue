import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { RootState } from '../reducer'; // Adjust the import path according to your project structure
import {addWorkout} from '../slices/workoutSlice'; // Adjust the import path according to your project structure

// Define the shape of the form state
interface FormState {
  title: string;
  description: string;
  frequency: string;
  startDate: string;
  duration: string;
}

// Define the props for the hook
interface UseWorkoutFormProps {
  closeModal: () => void;
}

// Define the return type of the hook
interface UseWorkoutFormReturn {
  formState: FormState;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const useWorkoutForm = (closeModal: UseWorkoutFormProps['closeModal']): UseWorkoutFormReturn => {
  const dispatch = useDispatch();
  const {workouts}=useSelector((state:RootState)=>state.workout)
  console.log(workouts);
  const [formState, setFormState] = useState<FormState>({
    title: '',
    description: '',
    frequency: '',
    startDate: '',
    duration: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formState.title || !formState.description || !formState.frequency || !formState.startDate || !formState.duration) {
      toast.error("All fields are required...");
      return;
    }
    const freq=Number(formState.frequency);
    const dur=Number(formState.duration);
    const endDate=new Date(formState.startDate);
    endDate.setDate(endDate.getDate()+(Number(formState.duration)*7));
    const weeks=[];
    for(let i=0;i<dur;i++){
      weeks.push(0);
    }
    const newObj={
      title:formState.title,
      frequency:freq,
      duration:dur,
      startDate:new Date(formState.startDate),
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
      startDate: '',
      duration: ''
    });
    closeModal();
  };

  return {
    formState,
    handleChange,
    handleSubmit
  };
};

export default useWorkoutForm;
