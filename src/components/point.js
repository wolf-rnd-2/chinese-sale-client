import react,{ useEffect, useState } from "react"
import '../csses/point.css'
import { Button } from 'primereact/button';
import { useLocation,useNavigate } from "react-router";
export default function Point(){

    let location=useLocation()
    let navigate=useNavigate()
    let name=location.state.name
let lastName=location.state.lastName
let grade=location.state.grade
let id=location.state.studenId
//sum-
//פה חסרה קריאת שרת ולשלוח לה את 
//location.state.id
    const sum=550;
    const [points,setPoints]=useState(0);
    useEffect((()=>{
        let tmp=(sum/50)*5;
        setPoints(tmp)
    }),[])

    const back=()=>{
navigate('/main',{state:{name,lastName,grade,id}})
    }
    return(<>
        <div id="img">
            <p>עד כה צברת {points} נקודות!</p>
            <Button icon="pi pi-times" rounded text raised  aria-label="Cancel" id="backButton" onClick={()=>back()}>{">"}</Button>
        </div>   
    </>)
}
