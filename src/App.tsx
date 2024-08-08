import React from 'react';
import HomePage from './pages/HomePage'; // Import HomePage component
import './App.css'; // Import CSS styles specific to the App component

import { Route, Routes } from 'react-router-dom'; // Import Route and Routes for handling routing
import NavBar from './components/common/NavBar'; // Import NavBar component
import ChallengesPage from './pages/ChallengesPage'; // Import ChallengesPage component
import WorkoutsPage from './pages/WorkoutsPage'; // Import WorkoutsPage component

const App: React.FC = () => {
  return (
    <div>
      <NavBar /> {/* Render the navigation bar */}
      <Routes> {/* Define the routes for the application */}
        <Route path='/' element={<HomePage />} /> {/* Route for the home page */}
        <Route path='/challenges' element={<ChallengesPage />} /> {/* Route for the challenges page */}
        <Route path='/workouts' element={<WorkoutsPage />} /> {/* Route for the workouts page */}
      </Routes>
    </div>
  );
};

export default App; // Export the App component as the default export
