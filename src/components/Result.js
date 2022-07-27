import styles from './Result.module.css';

function Result({ formatedText, setFormatedText }) {

  function clearText() {
    setFormatedText('');
  }

  return (
    <>
      {formatedText &&
        <section>
          <header>
            <h3>Texto formatado: </h3>
          </header>
          <div>
            <p className={styles.content}>{formatedText}</p>
            <br />
            <button onClick={clearText}>Limpar</button>
          </div>
        </section>
      }
    </>
  );
}

export default Result;
