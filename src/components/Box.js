import styles from './Content.module.css';

function Box(props) {

  return (
    <div className={styles.background}>
        <h3>Escreva seu texto abaixo: </h3>
        <textarea
          rows="4" cols="50"
          onChange={(e) => props.setText(e.target.value)}
          placeholder="Escreva seu texto"
          className={styles.textArea}
        />
        <br />
    </div>
  );
}

export default Box;
