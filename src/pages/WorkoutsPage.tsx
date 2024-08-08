import {useState} from 'react'
import WorkoutForm from '../components/workouts/WorkoutForm'
import GreetingSection from '../components/common/GreetingSection'
import Modal from "react-modal";
Modal.setAppElement("#root");
import style from '../styles/pages/Workouts.module.css'
const customStyles = {
  overlay: {
      backgroundColor: 'rgba(47, 47, 47, 0.75)'
    },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    height:"80vh",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    animation: "slideIn 1.5s ease-in-out",
    zIndex:"201"
  }
};
export default function WorkoutsPage() {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
      setIsOpen(false);
    }
  return (
    <div className={style.container} >
      <GreetingSection question="Do you want to add workout ?" desc="Click On Button to add WorkOut!" buttonContent="Create Workout"  openModal={openModal}/>    
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Create Group Modal"
      >
       <WorkoutForm closeModal={closeModal} type='add' />
      </Modal>
    </div>
  )
}
