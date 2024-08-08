import React from 'react';
import workout from '../../assets/workout.png';
import style from '../../styles/components/common/GreetingSection.module.css';
interface GreetingSectionProps{
   desc:string,
   question:string,
   buttonContent:string,
   openModal:()=>void

}
const GreetingSection: React.FC<GreetingSectionProps> = ({question,desc,buttonContent,openModal}) => {
  const onClickHandler=()=>{
    openModal();
  }
  return (
    <section className={style.container}>
      <div className={style.upperContainer}>
        <span className={style.greeting}>Hello !</span>
        <p className={style.question}>{question}</p>
      </div>
      <div className={style.lowerContainer}>
        <div className={style.innerContainer}>
          <p className={style.startMessage}>{desc}</p>
          <button className={style.startButton} onClick={onClickHandler}>{buttonContent}</button>
        </div>
        <img src={workout} alt="Workout" className={style.workoutImage} />
      </div>
    </section>
  );
};

export default GreetingSection;
