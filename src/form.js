// import React from "react"
// import './form.css'
// export default function Form(){
//     return(<>
//         <div id="first">
//             <div id="one" data-fillout-id="jCkFmuHQoQus" data-fillout-embed-type="fullscreen" data-fillout-inherit-parameters>
//             </div>
//             <script src="https://server.fillout.com/embed/v1/"></script>
//         </div>
//         {/* <div data-fillout-id="jCkFmuHQoQus" data-fillout-embed-type="popup" data-fillout-button-text="למילוי טופס" data-fillout-button-color="#F70101" data-fillout-button-size="medium" data-fillout-button-float="bottom-right" data-fillout-inherit-parameters></div><script src="https://server.fillout.com/embed/v1/"></script> */}
//     </>)
// }
import { FilloutFullScreenEmbed } from "@fillout/react";

function Form() {
  return (
    <FilloutFullScreenEmbed filloutId="jCkFmuHQoQus" inheritParameters />
//   {alert("winnnnnnn")}
  );
}
export default Form;
// import { useParams } from 'react-router-dom';

// const FilloutForm = () => {
//   const { rocketId } = useParams();

//   // Use the rocketId as needed in your FILLOUT form component

//   return (
//     <div>
//       <h1>FILLOUT Form</h1>
//       <p>Rocket ID: {rocketId}</p>
//     </div>
//   );
// };



// import { FilloutPopupEmbed } from "@fillout/react";
// import { useState } from "react";

// function App() {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <>
//       <button onClick={() => setIsOpen(true)}>לתרומות</button>
//       {isOpen && (
//         <FilloutPopupEmbed id="try"
//           filloutId="jCkFmuHQoQus"
//           onClose={() => setIsOpen(false)}
//           height="500px"
//         />
//       )}
//     </>
//   );
// }

// export default App;