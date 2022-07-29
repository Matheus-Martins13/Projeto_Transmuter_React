import { useState } from 'react';

import Box from './Box';
import Result from './Result';

function Main() {
  const [text, setText] = useState('');
  const [formatedText, setFormatedText] = useState('');
  
  return (
    <section>
        <Box setText={setText}/>

        <button
          onClick={(e) => setFormatedText(text.toUpperCase())}
          value="maiuscula"
        >Maúscula</button>
        
        <button
          onClick={(e) => setFormatedText(text.toLowerCase())}
          value="maiuscula"
        >Minúscula</button>

        <Result 
        formatedText={formatedText}
        setFormatedText={setFormatedText}
        />

    </section>
  );
}

export default Main;
