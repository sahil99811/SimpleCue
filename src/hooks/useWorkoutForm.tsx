import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { RootState } from '../reducer'; // Import RootState type for Redux store state
import { addWorkout } from '../slices/workoutSlice'; // Import action creator for adding workouts

// Define the shape of the workout object
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
  closeModal: () => void; // Function to close the modal
  workout?: Workout; // Optional workout object for editing
}

// Define the return type of the hook
interface UseWorkoutFormReturn {
  formState: FormState; // State of the form inputs
  handleChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void; // Handler for input changes
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, date: string) => void; // Handler for form submission
  editWorkout: (e: React.FormEvent<HTMLFormElement>, id: number) => void; // Handler for editing a workout
}

// Define the useWorkoutForm custom hook
const useWorkoutForm = (closeModal: UseWorkoutFormProps['closeModal'], workout?: Workout): UseWorkoutFormReturn => {
  const dispatch = useDispatch(); // Get the dispatch function from Redux
  const { workouts } = useSelector((state: RootState) => state.workout); // Get workouts from the Redux store
  console.log(workouts); // Log workouts to the console for debugging

  // Initialize form state with optional workout data or empty values
  const [formState, setFormState] = useState<FormState>({
    title: workout?.title || '',
    description: workout?.description || '',
    frequency: workout?.frequency || '',
    duration: workout?.duration || ''
  });

  // Handler for input changes
  const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  }, []);

  // Handler for form submission to add a new workout
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>, date: string) => {
    e.preventDefault();
    // Validate form fields
    if (!formState.title || !formState.description || !formState.frequency || !formState.duration) {
      toast.error("All fields are required...");
      return;
    }

    // Calculate end date and create new workout object
    const freq = Number(formState.frequency);
    const dur = Number(formState.duration);
    const endDate = new Date(date);
    endDate.setDate(endDate.getDate() + (dur * 7));
    const newObj = {
      title: formState.title,
      frequency: formState.frequency,
      duration: formState.duration,
      startDate: new Date(date),
      description: formState.description,
      id: workouts.length,
      endDate,
      totalDays: freq * dur,
      completedDays: 0,
      totalMissing: 0,
      state: "active"
    };

    // Dispatch action to add new workout and reset form state
    dispatch(addWorkout([...workouts, newObj]));
    setFormState({
      title: '',
      description: '',
      frequency: '',
      duration: ''
    });
    closeModal();
  }, [formState, workouts, dispatch, closeModal]);

  // Handler for editing an existing workout
  const editWorkout = useCallback((e: React.FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault();
    console.log("edit button called");
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
          totalDays: Number(formState.duration) * Number(formState.frequency)
        };
      }
      return workout;
    });

    // Dispatch action to update workout list
    dispatch(addWorkout(newWorkouts));
    closeModal();
  }, [formState, workouts, dispatch, closeModal]);

  return {
    formState,
    handleChange,
    handleSubmit,
    editWorkout
  };
};

export default useWorkoutForm; // Export the custom hook
