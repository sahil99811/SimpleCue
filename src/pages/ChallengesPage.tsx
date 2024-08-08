
import { useRef } from "react";
import Exercises from "../components/challenges/ExerCises";
import GreetingSection from "../components/common/GreetingSection";
import style from '../styles/pages/Challenges.module.css'

export default function ChallengesPage() {
  const exercisesRef = useRef<HTMLDivElement>(null);

  const scrollToExercises = () => {
    if (exercisesRef.current) {
      exercisesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className={style.container}>
      <GreetingSection question="What do you workout today?" desc="Start practicing your WorkOut!" buttonContent="Start Workout"  openModal={scrollToExercises}/>
      <div ref={exercisesRef}>
        <Exercises />
      </div>
    </div>
  )
}
