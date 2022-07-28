import styles from './Content.module.css';

function Box({ setText }) {
  return (
    <div className={styles.background}>
      <h3>Escreva seu texto abaixo: </h3>
      <textarea 
      onChange={(e) => setText(e.target.value)}
      rows="4" cols="50"
      placeholder="Escreva seu texto"
      className={styles.textArea}
      />
      <br/>
    </div>
  );
}

export default Box;
