import React, { useState, useEffect } from 'react';
import style from '../../styles/components/challenges/Exercises.module.css';
import ExerCisecard from './ExerCisecard';
import useWorkout from '../../hooks/useWorkout';

interface Workout {
  id: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  totalDays: number;
  frequency: number;
  completedDays: number;
  totalMissing: number;
  duration:number,
  state:string
}

export default function Exercises() {
  const { getWorkouts } = useWorkout();
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [filter, setFilter] = useState<string>('active');
  useEffect(() => {
    const filteredWorkouts:Workout[] = getWorkouts(new Date(), filter);
    setWorkouts(filteredWorkouts);
    console.log(filteredWorkouts);
  }, [filter]);

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
        {workouts?.map((workout, index) => (
          <ExerCisecard key={index} workout={workout} />
        ))}
      </div>
    </div>
  );
}
