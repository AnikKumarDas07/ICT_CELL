import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lay from './layouts/Lay';
import  './assets/css/nav.css';
import loadable from "@loadable/component";
const About = loadable(() => import("./assets/pages/About"));
const Contact = loadable(() => import("./assets/pages/Contact"));
const Address = loadable(() => import("./assets/pages/Address"));
const Home = loadable(() => import("./assets/pages/Home"));
const Link = loadable(() => import("./assets/pages/Links"));
const App = () => {
  return (
    
    
      <Router>
      <Routes>
        <Route path="/" element={   <Lay />}></Route>
        
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Address />} />
          <Route path="/" element={<Home />} />
          <Route path="link" element={<Link />} />
        
      </Routes>
    </Router>
    
  );
};

export default App;