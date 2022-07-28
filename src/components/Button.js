function Button({ name, option }) {

  return (
    <>
      <button onClick={option}>{name}</button>
    </>
  );

}

export default Button;
