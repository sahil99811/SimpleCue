import style from '../styles/pages/HomePage.module.css'; // Import CSS module for HomePage styling
import MainSection from '../components/homepage/MainSection'; // Import MainSection component

// Define the HomePage functional component
export default function HomePage() {
  return (
    <div className={style.container}> {/* Apply container styling from the CSS module */}
       <MainSection/> {/* Render the MainSection component */}
    </div>
  )
}
