import { useEffect, useState } from "react"
import '../csses/point.css'
import { Button } from 'primereact/button';
import { useLocation, useNavigate } from "react-router";
import {axios} from "axios";

export default function Point() {

    let location = useLocation()
    let navigate = useNavigate()
    let name = location.state.name
    let id = location.state.id
    const [points, setPoints] = useState(0);
    useEffect((() => {

        sumPoints()

    }))
    const sumPoints = async () => {
        let points = await axios.get(`https://weak-plum-ostrich-wear.cyclic.app/${id}`)
        if (points.data.sum  > 0) {
            setPoints((points.data.sum / 50)*5);
        }
    }
    const back = () => {
        navigate('/main', { state: { name, id } })
    }
    return (<>
        <div id="img">
            <header>
                <Button icon="pi pi-times" rounded text raised aria-label="Cancel" id="backButton" onClick={() => back()}>{"->"}</Button>

            </header><br />
            <p>עד כה צברת {points} נקודות!</p>
        </div>
    </>)
}
