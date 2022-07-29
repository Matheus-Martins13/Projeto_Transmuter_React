function Box(props) {

  return (
    <div>
        <h3>Escreva seu texto abaixo: </h3>
        <textarea
          rows="4" cols="50"
          onChange={(e) => props.setText(e.target.value)}
          placeholder="Escreva seu texto"
        />
        <br />
    </div>
  );
}

export default Box;
