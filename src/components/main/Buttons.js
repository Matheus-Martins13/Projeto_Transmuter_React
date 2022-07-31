import titleize from "./utils/titleize";

function Buttons(props) { 

  return (
    <>
      <button
        onClick={(e) => props.setFormatedText(props.text.toUpperCase())}
      >Maúscula</button>

      <button
        onClick={(e) => props.setFormatedText(props.text.toLowerCase())}
      >Minúscula</button>

      <button
        onClick={(e) => props.setFormatedText(titleize(props.text))}
      >Primeiras letras maiúsculas</button>
    </>
  );
}

export default Buttons;
