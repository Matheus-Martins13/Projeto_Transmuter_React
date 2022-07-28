import styles from './Content.module.css';

function Result({ text }) {

  return (
    <>
      <br/>
      <h3>Seu resultado:</h3>
      <textarea 
      rows="4" cols="50"
      className={styles.textArea}
      value={text}
      />
    </>

  );
}

export default Result;
