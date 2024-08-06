import React from 'react';
import HomePage from './pages/HomePage';
import './App.css'

import { Route, Routes } from 'react-router-dom';
import NavBar from './components/common/NavBar';
import ChallengesPage from './pages/ChallengesPage';
import WorkoutsPage from './pages/WorkoutsPage';

const App: React.FC = () => {
  return (
    <div >
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/challenges' element={<ChallengesPage/>}/>
        <Route path='/workouts' element={<WorkoutsPage/>}/>
      </Routes>
    </div>
  );
};

export default App;
