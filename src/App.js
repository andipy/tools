import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Nav from './components/Nav';
import List from './pages/List';
import ToolIntro from './pages/ToolIntro';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Recap from './pages/Recap';
import Congrats from './pages/Congrats';

function App() {
  
  return (        
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Navigate replace to='/tools' />} />
          <Route path='/tools' element={<List />} />
          <Route path='/tools/:name' element={<ToolIntro />} />
          <Route path='/tools/:name/step-1' element={<Step1 />} />
          <Route path='/tools/:name/step-2' element={<Step2 />} />
          <Route path='/tools/:name/recap' element={<Recap />} />
          <Route path='/tools/:name/congrats' element={<Congrats />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;







/*

const navigate = useNavigate();

  const [direction, setDirection] = useState('');
  const [animation, setAnimation] = useState({});
  
  const navigateBack = () => {
    setDirection('back');
    navigate(-1);
    console.log(animation);
  }
  const navigateForward = () => {
    setDirection('forward');
    console.log(animation);
  }

  */
