import { useState } from 'react';

import Box from './Box';
import Result from './Result';
import Buttons from './Buttons';

function Main() {
  const [text, setText] = useState('');
  const [formatedText, setFormatedText] = useState('');
  
  return (
    <section>
        <Box setText={setText}/>

        <Buttons
          setFormatedText={setFormatedText}
          text={text}
        />

        <Result 
        formatedText={formatedText}
        setFormatedText={setFormatedText}
        />

    </section>
  );
}

export default Main;
