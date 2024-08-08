import { useRef } from "react"; // Import useRef for managing a reference to a DOM element
import Exercises from "../components/challenges/ExerCises"; // Import Exercises component
import GreetingSection from "../components/common/GreetingSection"; // Import GreetingSection component
import style from '../styles/pages/Challenges.module.css'; // Import CSS module for ChallengesPage styling

// Define the ChallengesPage functional component
export default function ChallengesPage() {
  // Create a ref to hold a reference to the Exercises component
  const exercisesRef = useRef<HTMLDivElement>(null);

  // Function to smoothly scroll to the Exercises component
  const scrollToExercises = () => {
    if (exercisesRef.current) {
      exercisesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className={style.container}> {/* Apply container styling from the CSS module */}
      {/* Render GreetingSection with props and set openModal to scrollToExercises function */}
      <GreetingSection 
        question="What do you workout today?" 
        desc="Start practicing your WorkOut!" 
        buttonContent="Start Workout"  
        openModal={scrollToExercises} 
      />
      <div ref={exercisesRef}> {/* Set ref to exercisesRef for scrolling */}
        <Exercises /> {/* Render the Exercises component */}
      </div>
    </div>
  )
}
