
import { useLocation } from 'react-router'
import { FilloutFullScreenEmbed } from "@fillout/react";

export default function Form() {
  let location = useLocation();
  let name = location.state.name
  let id = location.state.id;
  return (<>
    <div>
      <FilloutFullScreenEmbed filloutId="jCkFmuHQoQus" inheritParameters parameters={{
        student: name,
        id: id
      }} />
    </div>
  </>);
}
