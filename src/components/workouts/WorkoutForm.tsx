import React from 'react';
import useWorkoutForm from '../../hooks/useWorkoutForm';
import style from '../../styles/components/workouts/WorkoutForm.module.css';


interface WorkoutFormProps {
  closeModal: () => void;
}

const WorkoutForm: React.FC<WorkoutFormProps> = ({ closeModal }) => {
  const { formState, handleChange, handleSubmit } = useWorkoutForm(closeModal);

  return (
    <form onSubmit={handleSubmit} className={style.formContainer}>
      <h2 className={style.heading}>Add Workout Description</h2>
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
      <div className={style.formGroup}>
        <label className={style.label}>Start Date</label>
        <input 
          name="startDate" 
          type='date' 
          value={formState.startDate} 
          onChange={handleChange} 
          className={style.input}
        />
      </div> 
      <button type='submit' className={style.button}>
        Add Challenge
      </button>
    </form>
  );
};

export default WorkoutForm;
