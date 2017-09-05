import React, { Component } from 'react';

class SequenceDiagram extends Component {
  componentDidMount() {
    const { input } = this.props;
    console.log(input);
  }

  render() {
    return <div ref={div => { this.div = div }} />
  }
}

export default SequenceDiagram;
