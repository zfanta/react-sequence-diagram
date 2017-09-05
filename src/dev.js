import React from 'react';
import { render } from 'react-dom';

import SequenceDiagram from './index';

const input =
  "Andrew->China: Says Hello\n" +
  "Note right of China: China thinks\nabout it\n" +
  "China-->Andrew: How are you?\n" +
  "Andrew->>China: I am good thanks!\n";

render(<SequenceDiagram input={input} />, document.getElementById('root'));
