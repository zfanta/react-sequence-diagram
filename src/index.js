import React, { Component } from 'react';

import Diagram from './sequence-diagram-2.0.1';

class SequenceDiagram extends Component {

  componentDidUpdate() {
    if (!this.div) return;

    const { input, options } = this.props;
    this.div.removeChild(this.div.children[0]);
    const diagram = Diagram.parse(input);
    diagram.drawSVG(this.div, options)
  }

  componentDidMount() {
    const { input, options } = this.props;
    const diagram = Diagram.parse(input);
    if (this.div) {
      diagram.drawSVG(this.div, options)
    }
  }

  render() {
    return <div className={this.props.className} ref={div => { this.div = div }} />
  }
}

export default SequenceDiagram;
