/* eslint-disable react/prefer-stateless-function */

import React from 'react';

import './Clock.scss';

type Props = {
  name: string
};

interface State {
  currentTime: string,
}

export class Clock extends React.Component<Props, State> {
  state: State = {
    currentTime: new Date().toLocaleTimeString(),
  };

  private timerId: NodeJS.Timer = setInterval(() => {}, 0);

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ currentTime: new Date().toLocaleTimeString() });

      // eslint-disable-next-line no-console
      console.log(this.state.currentTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps !== this.props) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="clock" data-cy="time">
        <h2 className="clock__name">{this.props.name}</h2>
        <h3 className="clock__time">{(new Date().toLocaleTimeString())}</h3>
      </div>
    );
  }
}
