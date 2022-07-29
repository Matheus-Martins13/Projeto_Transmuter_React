function Buttons(props) {
  return (
    <>
      <button
        onClick={(e) => props.setFormatedText(props.text.toUpperCase())}
        value="maiuscula"
      >Maúscula</button>

      <button
        onClick={(e) => props.setFormatedText(props.text.toLowerCase())}
        value="maiuscula"
      >Minúscula</button>
    </>
  );
}

export default Buttons;
