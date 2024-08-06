import React from 'react';
import style from '../../styles/components/homepage/MainSection.module.css';
import challenges from '../../assets/challenges.png';
import activity from '../../assets/trackactivity.png';
import start from '../../assets/started.png';
import ChallengesCard from './ChallengesCard';
import book from '../../assets/book.png';
import goal from '../../assets/goal.png';
import running from '../../assets/running.png';
import diet from '../../assets/diet.png';

interface Challenge {
  id: number;
  name: string;
  desc: string;
  imgSrc: string;
}

const challengesData: Challenge[] = [
  { id: 1, name: "Run at least 5 Kms each day.", desc: "Running at least 5 km daily improves cardiovascular health, boosts mood, enhances endurance, and aids in weight management.", imgSrc: running },
  { id: 2, name: "Follow a diet 5 days a week.", desc: "Following a diet 5 days a week supports weight control, boosts energy, improves overall health, and enhances nutritional balance.", imgSrc: diet },
  { id: 3, name: "Read a book every day for 15 minutes.", desc: "Reading daily for 15 minutes enhances mental stimulation, improves focus, reduces stress, expands knowledge, and boosts cognitive skills.", imgSrc: book },
  { id: 4, name: "Run 25 kms in a week.", desc: "Running 25 km a week boosts cardiovascular health, increases stamina, enhances mood, aids weight control, and improves overall fitness.", imgSrc: goal }
];

const MainSection: React.FC = () => {
  return (
    <div className={style.container}>
      <section className={style.start}>
        <img src={start} className={style.mainimage} alt="Start" />
        <div className={style.startcontent}>
          <h3>All in One App You Need To Get Fit At Home.</h3>
          <p>Get Fit At Home By Setting Your Fitness Goals And Tracking Them in One App.</p>
        </div>
      </section>
      
      <section className={style.activity}>
        <div className={style.activitycontent}>
          <h3>Track Your Daily Activity And Do Improvements</h3>
          <p>Daily Activity Tracking Helps You To Get Consider and Achieve Your Goals Faster.</p>
          <button>Let's Get Started</button>
        </div>
        <img src={activity} className={style.activityimage} alt="Activity" />
      </section>
      
      <section className={style.challenges}>
        <img src={challenges} className={style.challengesimage} alt="Challenges" />
        <div className={style.challengescontent}>
          <h3>Push Yourself And Take Challenges</h3>
          <p>There Are Many Challenges Available On The App That You Can Take According To Your Capability.</p>
          <button>Take A Challenge</button>
        </div>
      </section>
      
      <section className={style.challengesoptions}>
        <p>Challenges You Can Take On The App</p>
        <div className={style.challengeoption}>
          {challengesData.map((challenge) => (
            <ChallengesCard data={challenge} key={challenge.id} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default MainSection;
