import logo from './logo.svg';
import './App.scss';
import Header from './components/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import UserPosts from './containers/UserPosts';
import Main from './containers/Main'
// import {Routes} from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} /> {/* 👈 Renders at /app/ */}
        {/*<Header />*/}
        {/*<Main />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
