import React from 'react'; // Import React
import style from '../../styles/components/homepage/MainSection.module.css'; // Import CSS module for styling
import challenges from '../../assets/challenges.png'; // Import image assets
import activity from '../../assets/trackactivity.png';
import start from '../../assets/started.png';
import ChallengesCard from './ChallengesCard'; // Import the ChallengesCard component
import book from '../../assets/book.png';
import goal from '../../assets/goal.png';
import running from '../../assets/running.png';
import diet from '../../assets/diet.png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

// Define the shape of a Challenge object
interface Challenge {
  id: number;
  name: string;
  desc: string;
  imgSrc: string;
}

// Sample data for challenges
const challengesData: Challenge[] = [
  { id: 1, name: "Run at least 5 Kms each day.", desc: "Running at least 5 km daily improves cardiovascular health, boosts mood, enhances endurance, and aids in weight management.", imgSrc: running },
  { id: 2, name: "Follow a diet 5 days a week.", desc: "Following a diet 5 days a week supports weight control, boosts energy, improves overall health, and enhances nutritional balance.", imgSrc: diet },
  { id: 3, name: "Read a book every day for 15 minutes.", desc: "Reading daily for 15 minutes enhances mental stimulation, improves focus, reduces stress, expands knowledge, and boosts cognitive skills.", imgSrc: book },
  { id: 4, name: "Run 25 kms in a week.", desc: "Running 25 km a week boosts cardiovascular health, increases stamina, enhances mood, aids weight control, and improves overall fitness.", imgSrc: goal }
];

const MainSection: React.FC = () => {
  const navigate = useNavigate(); // Initialize the navigate function for page navigation

  return (
    <div className={style.container}>
      {/* Section introducing the app */}
      <section className={style.start}>
        <img src={start} className={style.mainimage} alt="Start" /> {/* Main image for the section */}
        <div className={style.startcontent}>
          <h3>All in One App You Need To Get Fit At Home.</h3>
          <p>Get Fit At Home By Setting Your Fitness Goals And Tracking Them in One App.</p>
        </div>
      </section>
      
      {/* Section for tracking daily activity */}
      <section className={style.activity}>
        <div className={style.activitycontent}>
          <h3>Track Your Daily Activity And Do Improvements</h3>
          <p>Daily Activity Tracking Helps You To Get Consider and Achieve Your Goals Faster.</p>
          <button onClick={() => navigate('/challenges')}>Let's Get Started</button> {/* Navigate to challenges page */}
        </div>
        <img src={activity} className={style.activityimage} alt="Activity" /> {/* Image related to activity tracking */}
      </section>
      
      {/* Section promoting challenges */}
      <section className={style.challenges}>
        <img src={challenges} className={style.challengesimage} alt="Challenges" /> {/* Image related to challenges */}
        <div className={style.challengescontent}>
          <h3>Push Yourself And Take Challenges</h3>
          <p>There Are Many Challenges Available On The App That You Can Take According To Your Capability.</p>
          <button onClick={() => navigate('/workouts')}>Take A Challenge</button> {/* Navigate to workouts page */}
        </div>
      </section>
      
      {/* Section displaying challenge cards */}
      <section className={style.challengesoptions}>
        <p>Challenges You Can Take On The App</p>
        <div className={style.challengeoption}>
          {/* Render a ChallengesCard for each challenge */}
          {challengesData.map((challenge) => (
            <ChallengesCard data={challenge} key={challenge.id} /> 
          ))}
        </div>
      </section>
    </div>
  );
}

export default MainSection;
