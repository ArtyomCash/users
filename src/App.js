import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import UserPosts from './containers/UserPosts';
import Main from './containers/Main';
import AboutUs from './containers/AboutUs';
import PrivacyPolicy from './containers/PrivacyPolicy';
import Contact from './containers/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/user-posts/:id' element={<UserPosts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
