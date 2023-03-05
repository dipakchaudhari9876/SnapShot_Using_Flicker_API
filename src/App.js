import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar';
import Mountain from './Component/Mountain/Mountain';
import Beaches from './Component/Beaches/Beaches';
import Bird from './Component/Bird/Bird';
import Food from './Component/Food/Food';
import Search from './Component/Search/Search';
import AppProvider from './pages/AppContext';

function App({ children }) {
  return (
    <AppProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Mountain />} />
          <Route path='/beaches' element={<Beaches />} />
          <Route path='/bird' element={<Bird />} />
          <Route path='/food' element={<Food />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
    //  

  );
}

export default App;
