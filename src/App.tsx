/*
 * @Author: TTFZippo
 * @Date: 2022-10-15 20:01:18
 * @LastEditors: TTFZippo
 * @LastEditTime: 2022-10-15 21:29:43
 * @Description: 
 */
// import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import Doc from './pages/doc';
import {
  Routes,
  Route
} from "react-router-dom";
// import types from './types/index'

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/doc/:id"> */}
          <Doc></Doc>
        {/* </Route>
      </Routes> */}
    </div>
  );
}

export default App;
