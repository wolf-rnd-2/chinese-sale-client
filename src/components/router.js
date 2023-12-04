import {  Routes, Route } from "react-router-dom";
import Login from "./login";
import Point from "./point";
import Form from "./form"
import Main from "./main";
import ChooseGifts from "./ChooseGifts";

export default function Router(){
    return( 
        <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/form" element={<Form/>}/>
              <Route path="/point" element={<Point/>}/>      
              <Route path="/main" element={<Main/>}/>      
              <Route path="/chooseGifts" element={<ChooseGifts/>}/>      
        </Routes>
    )
}
