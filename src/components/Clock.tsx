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
  private timerId: NodeJS.Timer | null;

  constructor(props: Props) {
    super(props);

    this.timerId = null;
  }

  state: State = {
    currentTime: new Date().toLocaleTimeString(),
  };

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
    if (this.timerId !== null) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="clock" data-cy="time">
        <h2 className="clock__name">{this.props.name}</h2>
        <h3 className="clock__time">{this.state.currentTime}</h3>
      </div>
    );
  }
}
