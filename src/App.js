import React, { useState } from "react";
// import './style.scss';
import { BrowserRouter, Route, Router, Routes, useParams } from "react-router-dom"
import CarData from './component/CarCard'
import CarCardUI from './component/CarCardUI'
import CarLearn from "./component/CarLearn";
import data from './component/cars.json';
function App() {
    const values = data;
    console.log(values);
    // const param=useParams();
    // console.log(param);
    return (
        <>
            <BrowserRouter>
               
                <Routes>
                    <Route path="/" element={ <CarCardUI data={values} />}/>
                    <Route  path="/car" element={
                        <CarLearn data={values}/>
                    } />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;

