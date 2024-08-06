import React from 'react';
import style from '../../styles/components/challenges/ExerCisesCard.module.css';

// Define the shape of the workout prop
interface Workout {
  title: string;
  description: string;
  frequency: number;
  startDate: Date;
  duration: number;
  completedDays: number;
  totalMissing: number;
  totalDays: number;
}

interface ExerCisecardProps {
  workout: Workout;
}

const ExerCisecard: React.FC<ExerCisecardProps> = ({ workout }) => {
  
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h4 className={style.title}>{workout.title}</h4>
        <p className={style.description}>{workout.description}</p>
      </div>
      <div className={style.progress}>
        <span className={style.completedDays}>{`Completed Days: ${workout.completedDays}/${workout.totalDays}`}</span>
        <span className={style.totalMissing}>{`Missed Days: ${workout.totalMissing}/${workout.totalDays}`}</span>
      </div>
      <div className={style.radioContainer}>
        <div className={style.radioOption}>
          <input type="radio" id="done-task" name="task-status" className={style.radioInput} />
          <label htmlFor="done-task" className={style.radioLabel}>Done Task</label>
        </div>
        <div className={style.radioOption}>
          <input type="radio" id="complete-task" name="task-status" className={style.radioInput} />
          <label htmlFor="complete-task" className={style.radioLabel}>Complete Task</label>
        </div>
        <div className={style.radioOption}>
          <input type="radio" id="missed-task" name="task-status" className={style.radioInput} />
          <label htmlFor="missed-task" className={style.radioLabel}>Missed Task</label>
        </div>
      </div>
    </div>
  );
};

export default ExerCisecard;
