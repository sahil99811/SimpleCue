import React, { useCallback } from 'react'; // Import React and useCallback
import workout from '../../assets/workout.png'; // Import workout image
import style from '../../styles/components/common/GreetingSection.module.css'; // Import CSS module for styling

// Define the props for the GreetingSection component
interface GreetingSectionProps {
  desc: string; // Description text
  question: string; // Question text
  buttonContent: string; // Content for the button
  openModal: () => void; // Function to open a modal
}

// GreetingSection functional component
const GreetingSection: React.FC<GreetingSectionProps> = React.memo(({ question, desc, buttonContent, openModal }) => {
  
  // Memoize the handler function to prevent re-creation on every render
  const onClickHandler = useCallback(() => {
    openModal(); // Call the openModal function passed via props
  }, [openModal]); // Dependency array includes openModal to keep the handler updated if openModal changes

  return (
    <section className={style.container}>
      {/* Upper container with greeting and question */}
      <div className={style.upperContainer}>
        <span className={style.greeting}>Hello !</span>
        <p className={style.question}>{question}</p>
      </div>
      
      {/* Lower container with description, button, and image */}
      <div className={style.lowerContainer}>
        <div className={style.innerContainer}>
          <p className={style.startMessage}>{desc}</p>
          <button className={style.startButton} onClick={onClickHandler}>
            {buttonContent}
          </button>
        </div>
        <img src={workout} alt="Workout" className={style.workoutImage} /> {/* Workout image */}
      </div>
    </section>
  );
});

export default GreetingSection;
