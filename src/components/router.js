import {  Routes, Route } from "react-router-dom";
import Login from "./login";
import Point from "./point";
import Form from "./form"
import Main from "./main";


export default function Router(){
    return( 
        <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/form" element={<Form/>}/>
              <Route path="/point" element={<Point/>}/>      
              <Route path="/main" element={<Main/>}/>      
        </Routes>
    )
}
