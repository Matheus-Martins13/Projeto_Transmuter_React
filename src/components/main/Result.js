
function Result(props) {

  return (
    <>
      <h3>Seu resultado:</h3>
      <textarea
        rows="4" cols="50"
        value={props.formatedText}
      />
      <br />

      <button onClick={(e) => props.setFormatedText('')}>Limpar</button>

    </>
  );
}

export default Result;
