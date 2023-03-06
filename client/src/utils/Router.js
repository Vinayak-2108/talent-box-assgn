import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Signup from "../pages/Signup";

const Router = () => {
    return ( 
        <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/SignUp" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
     );
}
 
export default Router;