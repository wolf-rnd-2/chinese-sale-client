import { Button } from 'primereact/button';

import '../csses/main.css'
import { useLocation, useNavigate } from 'react-router'
export default function Main() {
    let navigate = useNavigate()
    let location = useLocation();
    let name = location.state.name
    // let lastName = location.state.lastName
    // let grade = location.state.grade
    let id = location.state.id
    debugger
    const donate = () => {
        navigate("/form", { state: { name, id } })
    }
    const viewPoints = () => {
        navigate("/point", { state: { name, id } })
    }
    const chooseGifts = () => {
        navigate("/ChooseGifts", { state: { name, id } })
    }
    return (<>
        {console.log("main")}
        <div id="img">
            <p>שלום לך {name}!</p>
            <Button label="להזנת התרומה" className="p-button-raised p-button-secondary" onClick={() => donate()} /><br />
            <Button label="הנקודות שצברת" className="p-button-raised p-button-secondary" onClick={() => viewPoints()} />
            <Button label="בחירת מתנות" className="p-button-raised p-button-secondary" onClick={() =>chooseGifts()} />

        </div>
    </>

    )
}
