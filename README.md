# react-sequence-diagram

React component based on [js-sequence-diagrams](https://github.com/bramp/js-sequence-diagrams)

## Install
`npm install react-sequence-diagram`
or
`yarn add react-sequence-diagram`

## Example
```javascript
import React from 'react';
import { render } from 'react-dom';

import SequenceDiagram from 'react-sequence-diagram';

const input =
  'Andrew->China: Says Hello\n' +
  'Note right of China: China thinks\\nabout it\n' +
  'China-->Andrew: How are you?\n' +
  'Andrew->>China: I am good thanks!';


render(<SequenceDiagram input={input} options={} />, document.getElementById('root'));
```

More details at [js-sequence-diagrams](https://github.com/bramp/js-sequence-diagrams)
