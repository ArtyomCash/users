import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import UserPosts from './containers/UserPosts';
import Main from './containers/Main'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/user-posts/:id' element={<UserPosts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
