
import { useLocation } from 'react-router'
import { FilloutFullScreenEmbed } from "@fillout/react";

function Form() {
  let location = useLocation();
  let name = location.state.name
  let id = location.state.id
  return (
  
    <FilloutFullScreenEmbed filloutId="jCkFmuHQoQus" inheritParameters parameters={{
      student: name,
      id: id
    }} />
  );
}
export default Form;
