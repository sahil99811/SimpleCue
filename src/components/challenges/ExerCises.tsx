import React, { useState, useEffect, useCallback, Suspense, lazy } from 'react'; // Import React and hooks
import style from '../../styles/components/challenges/Exercises.module.css'; // Import CSS module for styling
import useWorkout from '../../hooks/useWorkout'; // Import custom hook for workout logic
import { useSelector } from 'react-redux'; // Import useSelector for Redux state
import { RootState } from '../../reducer/index'; // Import RootState type

// Lazy load the ExerCisecard component
const ExerCisecard = lazy(() => import('./ExerCisecard'));

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

  // Memoize the handler function to update filter state
  const handleFilterChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  }, []); // Empty dependency array ensures that the function is memoized

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
        <Suspense fallback={<div>Loading exercises...</div>}>
          {exercises?.map((exercise, index) => (
            <ExerCisecard key={index} workout={exercise} filter={filter} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}
