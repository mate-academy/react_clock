import React from 'react';

interface Props {
  name: number;
}

export class ClockName extends React.Component<Props> {
  state = {
    clockName: this.props.name,
  };

  componentDidMount() {
    console.log(`start name for clock ${this.state.clockName}`);
  }

  componentDidUpdate(prevProps : Props) {
    console.log(`name changed from ${prevProps.name} to ${this.props.name}`);
  }

  render() {
    return ('');
  }
}
