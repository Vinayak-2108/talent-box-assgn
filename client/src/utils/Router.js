import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Courses from "../pages/Courses";

const Router = () => {
    return ( 
        <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/courses" element={<Courses />} />
        </Routes>
      </BrowserRouter>
    </>
     );
}
 
export default Router;