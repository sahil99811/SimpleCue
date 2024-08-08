import React from 'react';
import useWorkoutForm from '../../hooks/useWorkoutForm';
import style from '../../styles/components/workouts/WorkoutForm.module.css';
import { useRef } from 'react';
import toast from 'react-hot-toast';
interface Workout {
  title?: string;
  description?: string;
  frequency?: string;
  duration?: string;
  startDate?: Date;
}

interface WorkoutFormProps {
  closeModal: () => void;
  type: 'add' | 'edit';
  workout?: Workout;
  id?:number
}

const WorkoutForm: React.FC<WorkoutFormProps> = ({ closeModal, type, workout ,id=0}) => {
  const startDateRef = useRef<HTMLInputElement | null>(null);
  console.log("id",id);
  const { formState, handleChange, handleSubmit,editWorkout } = useWorkoutForm(closeModal, workout);
  const onClickHandler=(event: React.FormEvent<HTMLFormElement>)=>{
      if(!startDateRef?.current?.value){
        toast.error("select data")
        return;
      }
     
     type==='add'?handleSubmit(event,startDateRef?.current?.value):editWorkout(event,id)
  }
  return (
    <form onSubmit={onClickHandler} className={style.formContainer}>
      <h2 className={style.heading}>{type === 'edit' ? 'Edit Workout Description' : 'Add Workout Description'}</h2>
      <div className={style.formGroup}>
        <label className={style.label}>Title</label>
        <select 
          name="title" 
          value={formState.title} 
          onChange={handleChange} 
          className={style.select}
        >
          <option value="" disabled>Select Title</option>
          <option value="running">Running</option>
          <option value="diet">Diet</option>
          <option value="reading">Reading</option>
        </select>
      </div>
      <div className={style.formGroup}>
        <label className={style.label}>Description</label>
        <input
          name="description"
          type='text'
          value={formState.description}
          onChange={handleChange}
          placeholder='Enter a description...'
          className={style.input}
        />
      </div>
      <div className={style.formGroup}>
        <label className={style.label}>Frequency</label>
        <select 
          name="frequency" 
          value={formState.frequency} 
          onChange={handleChange} 
          className={style.select}
        >
          <option value="" disabled>Select Frequency</option>
          <option value="1">Weekly</option>
          <option value="2">2 days a week</option>
          <option value="3">3 days a week</option>
          <option value="4">4 days a week</option>
          <option value="5">5 days a week</option>
          <option value="6">6 days a week</option>
          <option value="7">Daily</option>
        </select>
      </div>
      <div className={style.formGroup}>
        <label className={style.label}>Duration</label>
        <select 
          name="duration" 
          value={formState.duration} 
          onChange={handleChange} 
          className={style.select}
        >
          <option value="" disabled>Select Duration</option>
          <option value="1">1 week</option>
          <option value="2">2 weeks</option>
          <option value="3">3 weeks</option>
          <option value="4">4 weeks</option>
          <option value="5">5 weeks</option>
          <option value="6">6 weeks</option>
          <option value="7">7 weeks</option>
        </select>
      </div>
      {type === 'add' && (
        <div className={style.formGroup}>
          <label className={style.label}>Start Date</label>
          <input 
            name="startDate" 
            type='date' 
            ref={startDateRef}
            className={style.input}
          />
        </div>
      )}
      <button type='submit' className={style.button} >
        {type === 'edit' ? 'Update Challenge' : 'Add Challenge'}
      </button>
    </form>
  );
};

export default WorkoutForm;
