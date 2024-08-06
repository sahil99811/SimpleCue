import React from 'react'
import style from '../../styles/components/homepage/ChallengesCard.module.css'
interface Challenge {
    id: number;
    name: string;
    desc: string;
    imgSrc: string;
  }
  
  interface ChallengesCardProps {
    data: Challenge;
  }

const ChallengesCard: React.FC<ChallengesCardProps>=({data})=> {
  return (
    <div className={style.container}>
        <img src={data.imgSrc}></img>
        <span>{data.name}</span>
        <p>{data.desc}</p>
    </div>
  )
}
export default ChallengesCard;