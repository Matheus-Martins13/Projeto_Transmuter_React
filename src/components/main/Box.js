function Box(props) {

  return (
    <>
      <header>
        <h3>Escreva seu texto abaixo: </h3>
      </header>
      <textarea
        rows="4" cols="50"
        onChange={(e) => props.setText(e.target.value)}
        placeholder="Escreva seu texto"
      />
      <br/>
    </>
  );
}

export default Box;
