import { useState } from 'react'; // Import useState for managing component state
import WorkoutForm from '../components/common/WorkoutForm'
import GreetingSection from '../components/common/GreetingSection'; // Import the GreetingSection component for introductory text and button
import Modal from "react-modal"; // Import Modal for displaying modals
import style from '../styles/pages/Workouts.module.css'
Modal.setAppElement("#root"); // Set the app element for accessibility purposes

// Define custom styles for the modal
const customStyles = {
  overlay: {
      backgroundColor: 'rgba(47, 47, 47, 0.75)', // Dark semi-transparent background for the modal overlay
      zIndex: 200, // Ensure modal appears above other content
    },
  content: {
    top: "50%", // Center the modal vertically
    left: "50%", // Center the modal horizontally
    right: "auto",
    bottom: "auto",
    height: "80vh", // Set modal height to 80% of the viewport height
    marginRight: "-50%", // Adjust margin to properly center the modal
    transform: "translate(-50%, -50%)", // Center the modal using transform
    animation: "slideIn 1.5s ease-in-out", // Apply slide-in animation
  }
};

// Define the WorkoutsPage functional component
export default function WorkoutsPage() {
    const [modalIsOpen, setIsOpen] = useState(false); // State to manage modal visibility

    function openModal() {
      setIsOpen(true); // Function to open the modal
    }

    function closeModal() {
      setIsOpen(false); // Function to close the modal
    }

    return (
      <div className={style.container} >
        {/* Render the GreetingSection component with props */}
        <GreetingSection 
          question="Do you want to add workout ?" 
          desc="Click On Button to add WorkOut!" 
          buttonContent="Create Workout"  
          openModal={openModal} 
        />    
        {/* Render the Modal component with props */}
        <Modal
          isOpen={modalIsOpen} // Control modal visibility
          onRequestClose={closeModal} // Close modal when requested
          style={customStyles} // Apply custom styles to the modal
          contentLabel="Create Group Modal" // Accessibility label for the modal content
        >
          {/* Render the WorkoutForm component within the modal */}
          <WorkoutForm closeModal={closeModal} type='add' />
        </Modal>
      </div>
    )
}
