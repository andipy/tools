import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';

import List from './List';
import ToolIntro from './ToolIntro';
import Step1 from './Step1';

import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = ({ navigateForward, direction, animation, setAnimation }) => {

    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<List />} />
                <Route path='/tool/:name' element={<ToolIntro />} >
                    <Route path='/:step' element={<Step1 />}></Route>                    
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;