import { useState } from 'react';
import Result from './Result';
import styles from './Content.module.css';

function Form() {

  const [text, setText] = useState('');
  const [formatedText, setFormatedText] = useState('');

  function formatText(e) {
    e.preventDefault();
    if(!text) return setFormatedText('Escreva um texto!');
    return setFormatedText(text.toUpperCase());
  }

  return (
    <div className={styles.background}>
      <form onSubmit={formatText}>
      <textarea 
      onChange={(e) => setText(e.target.value)}
      rows="4" cols="50"
      placeholder="Escreva seu texto"
      className={styles.textArea}
      />
      <br/>
      <button type="submit">Converter</button>
      </form>

      <Result formatedText={formatedText} setFormatedText={setFormatedText}/>

    </div>
  );
}

export default Form;
