import React, { useState } from 'react';
import style from '../../styles/components/challenges/ExerCisesCard.module.css';
import useWorkout  from '../../hooks/useWorkout';
import Modal from "react-modal";
import WorkoutForm from '../workouts/WorkoutForm';
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(47, 47, 47, 0.75)',
    zIndex: 200, 
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    height: "80vh",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    animation: "slideIn 1.5s ease-in-out",
    zIndex: 201,
  }
};

interface Workout {
  title: string;
  description: string;
  frequency: string;
  startDate: Date;
  duration: string;
  completedDays: number;
  totalMissing: number;
  totalDays: number;
  id:number;
  state:string;
  
}

interface ExerCisecardProps {
  workout: Workout;
  filter:string
}

const ExerCisecard: React.FC<ExerCisecardProps> = ({ workout,filter }) => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
      setIsOpen(false);
    }
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
    <>
    <div className={style.container}>
      <div className={style.header}>
        <h4 className={style.title}>{workout.title}</h4>
        <p className={style.description}>{workout.description}</p>
      </div>
      <button className={style.editButton} onClick={openModal}>Edit</button>
      <div className={style.progress}>
        <span className={style.completedDays}>{`Completed Days: ${workout.completedDays}/${workout.totalDays}`}</span>
        <span className={style.totalMissing}>{`Missed Days: ${workout.totalMissing}/${workout.totalDays}`}</span>
        <span className={style.totalMissing}>{`Duration: ${workout.duration} Weeks`}</span>
        <span className={style.totalMissing}>{`Frequency: ${workout.frequency} Days A Week`}</span>
        <span className={style.totalMissing}>{`Progress: ${Math.floor((workout.completedDays / workout.totalDays) * 100)}%`}</span>
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
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Create Group Modal"
      >
       <WorkoutForm closeModal={closeModal} type={"edit"} workout={workout} id={workout.id}/>
      </Modal>
    </div>
    </>
  );
};

export default ExerCisecard;
