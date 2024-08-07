import React, { useState, useEffect } from 'react';
import style from '../../styles/components/challenges/Exercises.module.css';
import ExerCisecard from './ExerCisecard';
import useWorkout from '../../hooks/useWorkout';
import { useSelector} from 'react-redux';
import { RootState } from '../../reducer/index';

export default function Exercises() {
  const { getWorkouts } = useWorkout();
  const {exercises,workouts}=useSelector((state:RootState)=>state.workout)

  const [filter, setFilter] = useState<string>('active');
  useEffect(() => {
    getWorkouts(new Date(), filter);
  }, [filter,workouts]);
  
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };
  return (
    <div className={style.container}>
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
      <div className={style.exercisesContainer}>
        {exercises?.map((excercise, index) => (
          <ExerCisecard key={index} workout={excercise} filter={filter} />
        ))}
      </div>
    </div>
  );
}
