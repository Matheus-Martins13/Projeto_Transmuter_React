import { useState } from 'react';
import Result from './Result';

function Form() {

  const [text, setText] = useState('');
  const [formatedText, setFormatedText] = useState('');

  function formatText(e) {
    e.preventDefault();
    if(!text) return setFormatedText('Escreva um texto!');
    return setFormatedText(text.toUpperCase());
  }

  return (
    <div>
      <form onSubmit={formatText}>
      <textarea 
      onChange={(e) => setText(e.target.value)}
      rows="4" cols="50"
      placeholder="Escreva seu texto"
      />
      <br/>
      <button type="submit">Converter</button>
      </form>

      <Result formatedText={formatedText} setFormatedText={setFormatedText}/>

    </div>
  );
}

export default Form;
