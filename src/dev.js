import React from 'react';
import { render } from 'react-dom';

import SequenceDiagram from './index';

const input =
  'Andrew->China: Says Hello\n' +
  'Note right of China: China thinks\\nabout it\n' +
  'China-->Andrew: How are you?\n' +
  'Andrew->>China: I am good thanks!';

const options = {
  theme: 'simple'
};

function onError(error) {
  console.log(error);
}

render(<SequenceDiagram input={input} options={options} onError={onError} />, document.getElementById('root'));
