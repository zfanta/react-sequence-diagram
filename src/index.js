import React, { Component } from 'react';

import Diagram from './sequence-diagram-2.0.1';

class SequenceDiagram extends Component {

  componentDidUpdate() {
    if (!this.div) return;

    const { input, options } = this.props;
    if (this.div.children[0]){
      this.div.removeChild(this.div.children[0]);
    }
    try {
      const diagram = Diagram.parse(input);
      diagram.drawSVG(this.div, options);
    } catch(err) {
     this.processError(err);
    }
  }

  componentDidMount() {
    const { input, options } = this.props;
    try {
      const diagram = Diagram.parse(input);
      if (this.div) {
        diagram.drawSVG(this.div, options)
      }
    } catch(err) {
      this.processError(err);
    }
  }

  processError(err) {
    //use same annotation object as https://bramp.github.io/js-sequence-diagrams/
    var annotation = {
      type: "error", // also warning and information
      column: 0,
      row: 0,
      text: err.message
    };
    if (err instanceof Diagram.ParseError) {
      annotation.row    = err.loc.first_line - 1;
      annotation.column = err.loc.first_column;
    }
    if (typeof this.props.onError === 'function') {
      this.props.onError(annotation);
    }
  }

  render() {
    return <div className={this.props.className} ref={div => { this.div = div }} />
  }
}

export default SequenceDiagram;
