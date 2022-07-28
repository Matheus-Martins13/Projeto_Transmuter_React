import { useState } from 'react';
import Result from './Result';
import Box from './Box';
import Button from './Button';

function Main() {
  const [text, setText] = useState('');
  return (
    <section>
      <Box setText={setText} />
      <Button name='Maiuscula' option='#'/>
      <Button name='Minuscula' option='#'/>
      <Button name='Primeira maiuscula' option='#'/>
      <Button name='Maiuscula' option='#'/>
      <Result text={text} />
    </section>
  );
}

export default Main;
