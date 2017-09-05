import React, { Component } from 'react';

import Diagram from './sequence-diagram-2.0.1';

class SequenceDiagram extends Component {
  componentDidMount() {
    const { input, options } = this.props;
    const diagram = Diagram.parse(input);
    if (this.div) {
      diagram.drawSVG(this.div, options)
    }
  }

  render() {
    return <div ref={div => { this.div = div }} />
  }
}

export default SequenceDiagram;
