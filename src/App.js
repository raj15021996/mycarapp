import React, {useState} from "react";
// import './style.scss';
import {BrowserRouter} from "react-router-dom"
import CarData from './component/CarCard'
import CarCardUI from './component/CarCardUI'
function App() {
  return (
   <>
     <BrowserRouter>
       <CarCardUI/>
       </BrowserRouter>
   </>
    )
}
export default App;

