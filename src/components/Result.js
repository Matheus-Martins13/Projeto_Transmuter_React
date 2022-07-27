import styles from './Content.module.css';

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

          <div className={styles.container}>
            <div className={styles.box}>
              <p>{formatedText}</p>
              <br />
            </div>
          </div>

          <button onClick={clearText}>Limpar</button>
        </section>
      }
    </>
  );
}

export default Result;
