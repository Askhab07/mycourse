import React from 'react';
import Home from './page/home/Home';
import { Routes, Route } from 'react-router-dom';
import MyTrainig from './page/my-training/MyTrainig';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/profile' element={<MyTrainig />}/>
      </Routes>
    </div>
  );
}

export default App;
