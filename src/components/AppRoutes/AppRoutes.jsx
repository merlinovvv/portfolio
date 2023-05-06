import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { About, Home } from '../../pages';
import { AnimatePresence } from 'framer-motion';

function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AppRoutes;
