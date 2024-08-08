import React, { useState, useEffect } from 'react'; // Import React and hooks
import style from '../../styles/components/challenges/Exercises.module.css'; // Import CSS module for styling
import ExerCisecard from './ExerCisecard'; // Import ExerCisecard component
import useWorkout from '../../hooks/useWorkout'; // Import custom hook for workout logic
import { useSelector } from 'react-redux'; // Import useSelector for Redux state
import { RootState } from '../../reducer/index'; // Import RootState type

export default function Exercises() {
  // Destructure getWorkouts function from custom hook useWorkout
  const { getWorkouts } = useWorkout();
  
  // Access exercises and workouts from the Redux store
  const { exercises, workouts } = useSelector((state: RootState) => state.workout);

  // State to manage the current filter value
  const [filter, setFilter] = useState<string>('active');

  // Effect to fetch workouts based on the current filter and workouts state
  useEffect(() => {
    getWorkouts(new Date(), filter); // Fetch workouts based on current date and filter
  }, [filter, workouts]); // Dependency array includes filter and workouts

  // Handler function to update filter state based on user selection
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  console.log(exercises); // Log exercises for debugging

  return (
    <div className={style.container}>
      {/* Header section with title and filter dropdown */}
      <div className={style.header}>
        <h3 className={style.title}>Exercises</h3>
        <div className={style.filterContainer}>
          <label htmlFor="filterBy" className={style.filterLabel}>Filter By</label>
          <select id="filterBy" className={style.filterSelect} onChange={handleFilterChange}>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
            <option value="missed">Missed</option>
          </select>
        </div>
      </div>

      {/* Container for rendering filtered exercises */}
      <div className={style.exercisesContainer}>
        {exercises?.map((excercise, index) => (
          <ExerCisecard key={index} workout={excercise} filter={filter} />
        ))}
      </div>
    </div>
  );
}
