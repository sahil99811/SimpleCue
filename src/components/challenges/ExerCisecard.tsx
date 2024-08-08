import React, { useState } from 'react'; // Import React and useState hook
import style from '../../styles/components/challenges/ExerCisesCard.module.css'; // Import CSS module for styling
import useWorkout from '../../hooks/useWorkout'; // Import custom hook for workout logic
import Modal from "react-modal"; // Import Modal component for displaying modals
import WorkoutForm from '../workouts/WorkoutForm'; // Import WorkoutForm component for editing workouts

// Custom styles for the modal
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(47, 47, 47, 0.75)', // Dark overlay color
    zIndex: 200, // Z-index to stack above other elements
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    height: "80vh", // Set modal height
    marginRight: "-50%",
    transform: "translate(-50%, -50%)", // Center the modal
    animation: "slideIn 1.5s ease-in-out", // Animation for sliding in
    zIndex: 201, // Higher z-index for modal content
  }
};

// Interface for workout object
interface Workout {
  title: string;
  description: string;
  frequency: string;
  startDate: Date;
  duration: string;
  completedDays: number;
  totalMissing: number;
  totalDays: number;
  id: number;
  state: string;
}

// Props interface for ExerCisecard component
interface ExerCisecardProps {
  workout: Workout;
  filter: string;
}

// ExerCisecard functional component
const ExerCisecard: React.FC<ExerCisecardProps> = ({ workout, filter }) => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false); // State to manage modal visibility

  // Function to open the modal
  function openModal() {
    setIsOpen(true);
  }

  // Function to close the modal
  function closeModal() {
    setIsOpen(false);
  }

  // Destructure updateTaskStatus from custom hook useWorkout
  const { updateTaskStatus } = useWorkout();

  const [radio, setRadio] = useState<string>(""); // State to manage selected radio button

  // Handler for status change
  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const status = e.target.id;
    setRadio(status);

    // Update workout status based on selected radio button
    if (status === 'done') {
      updateTaskStatus(workout.id, 'done');
    } else if (status === 'missed') {
      updateTaskStatus(workout.id, 'missed');
    } else {
      updateTaskStatus(workout.id, 'completed');
    }

    // Clear the radio button selection after a short delay
    setTimeout(() => {
      setRadio('');
    }, 1000);
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.header}>
          <h4 className={style.title}>{workout.title}</h4>
          <p className={style.description}>{workout.description}</p>
        </div>
        <button className={style.editButton} onClick={openModal}>Edit</button> {/* Button to open the modal */}
        <div className={style.progress}>
          <span className={style.completedDays}>{`Completed Days: ${workout.completedDays}/${workout.totalDays}`}</span>
          <span className={style.totalMissing}>{`Missed Days: ${workout.totalMissing}/${workout.totalDays}`}</span>
          <span className={style.totalMissing}>{`Duration: ${workout.duration} Weeks`}</span>
          <span className={style.totalMissing}>{`Frequency: ${workout.frequency} Days A Week`}</span>
          <span className={style.totalMissing}>{`Progress: ${Math.floor((workout.completedDays / workout.totalDays) * 100)}%`}</span>
        </div>
        {/* Conditional rendering of radio buttons based on filter */}
        {filter === 'active' && (
          <div className={style.radioContainer}>
            <div className={style.radioOption}>
              <input type="radio" id="done" name="task-status" className={style.radioInput} onChange={handleStatusChange} checked={radio === 'done'} />
              <label htmlFor="done-task" className={style.radioLabel}>Done Task</label>
            </div>
            <div className={style.radioOption}>
              <input type="radio" id="complete" name="task-status" className={style.radioInput} onChange={handleStatusChange} checked={radio === 'complete'} />
              <label htmlFor="complete-task" className={style.radioLabel}>Complete Task</label>
            </div>
            <div className={style.radioOption}>
              <input type="radio" id="missed" name="task-status" className={style.radioInput} onChange={handleStatusChange} checked={radio === 'missed'} />
              <label htmlFor="missed-task" className={style.radioLabel}>Missed Task</label>
            </div>
          </div>
        )}
        {/* Modal for editing workout details */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Edit Workout Modal"
        >
          <WorkoutForm closeModal={closeModal} type={"edit"} workout={workout} id={workout.id} />
        </Modal>
      </div>
    </>
  );
};

export default ExerCisecard;
