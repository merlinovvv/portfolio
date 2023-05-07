import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { About, Home } from '../../pages';
import { AnimatePresence } from 'framer-motion';
import { Form, Projects, Stack } from '../';

function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/stack" element={<Stack />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Form />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AppRoutes;
