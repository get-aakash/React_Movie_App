import React from 'react';
import './App.scss';
import {  Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
      <Routes>
        
          <Route path='/'element={<Home/> } />
          <Route path='/movie/:imdbID' element={<MovieDetail/> }/>
          <Route element={<PageNotFound/>} />
        
      </Routes>
    </div>
  );
}

export default App;
