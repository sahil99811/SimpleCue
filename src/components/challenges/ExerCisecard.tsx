import React, { useState } from 'react';
import style from '../../styles/components/challenges/ExerCisesCard.module.css';
import useWorkout  from '../../hooks/useWorkout';

interface Workout {
  title: string;
  description: string;
  frequency: number;
  startDate: Date;
  duration: number;
  completedDays: number;
  totalMissing: number;
  totalDays: number;
  id:number,
  state:string
}

interface ExerCisecardProps {
  workout: Workout;
  filter:string
}

const ExerCisecard: React.FC<ExerCisecardProps> = ({ workout,filter }) => {
  const { updateTaskStatus } = useWorkout();
  const [radio,setRadio]=useState<string>("");
  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const status = e.target.id;
    setRadio(status)
    if (status === 'done') {
      updateTaskStatus(workout.id,'done')
    } else if(status==='missed') {
      updateTaskStatus(workout.id,'missed')
    }else {
      updateTaskStatus(workout.id,'completed')
    }
    setTimeout(()=>{
      setRadio('')
    },1000)
  };
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h4 className={style.title}>{workout.title}</h4>
        <p className={style.description}>{workout.description}</p>
      </div>
      <div className={style.progress}>
        <span className={style.completedDays}>{`Completed Days: ${workout.completedDays}/${workout.totalDays}`}</span>
        <span className={style.totalMissing}>{`Missed Days: ${workout.totalMissing}/${workout.totalDays}`}</span>
        <span className={style.totalMissing}>{`Duration: ${workout.duration} Weeks`}</span>
        <span className={style.totalMissing}>{`Frequency: ${workout.frequency} Days A Week`}</span>
        <span className={style.totalMissing}>
  {`Progress: ${Math.floor((workout.completedDays / workout.totalDays) * 100)}%`}
</span>

      </div>
      {
        (filter==='active')&&<div className={style.radioContainer}>
        <div className={style.radioOption}>
          <input type="radio" id="done" name="task-status" className={style.radioInput} onChange={handleStatusChange} checked={radio === 'done'}/>
          <label htmlFor="done-task" className={style.radioLabel}>Done Task</label>
        </div>
        <div className={style.radioOption}>
          <input type="radio" id="complete" name="task-status" className={style.radioInput} onChange={handleStatusChange} checked={radio === 'complete'}/>
          <label htmlFor="complete-task" className={style.radioLabel}>Complete Task</label>
        </div>
        <div className={style.radioOption}>
          <input type="radio" id="missed" name="task-status" className={style.radioInput} onChange={handleStatusChange} checked={radio === 'missed'} />
          <label htmlFor="missed-task" className={style.radioLabel}>Missed Task</label>
        </div>
      </div>
      }
    </div>
  );
};

export default ExerCisecard;
