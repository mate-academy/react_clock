import React from 'react';
import { Props } from '../types/Props';
import { State } from '../types/State';

export class Clock extends React.Component<Props, State> {
  interval?: number;

  state = {
    date: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.interval = window.setInterval(
      () => this.step(),
      1000,
    );
  }

  componentDidUpdate({ name }: Props) {
    if (this.props.name !== name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  step() {
    // eslint-disable-next-line no-console
    console.log(this.state.date);

    this.setState({
      date: new Date().toLocaleTimeString(),
    });
  }

  render() {
    return (
      <>
        {this.state.date}
      </>
    );
  }
}
