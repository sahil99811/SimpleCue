import React from 'react'; // Import React
import style from '../../styles/components/homepage/ChallengesCard.module.css'; // Import CSS module for styling

// Define the shape of a Challenge object
interface Challenge {
  id: number;
  name: string;
  desc: string;
  imgSrc: string;
}

// Define the props for the ChallengesCard component
interface ChallengesCardProps {
  data: Challenge; // Challenge data to be passed as a prop
}

// ChallengesCard component to display individual challenge details
const ChallengesCard: React.FC<ChallengesCardProps> = ({ data }) => {
  return (
    <div className={style.container}> {/* Container for the card */}
      <img src={data.imgSrc} alt={data.name} className={style.image} /> {/* Display challenge image */}
      <span className={style.name}>{data.name}</span> {/* Display challenge name */}
      <p className={style.description}>{data.desc}</p> {/* Display challenge description */}
    </div>
  );
}

export default ChallengesCard;
