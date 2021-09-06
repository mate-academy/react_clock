/* eslint-disable no-console */

import React from 'react';

type Props = {
  name: number;
};

type State = {
  time: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date(),
  };

  interval = setInterval(() => {
    this.state.time.toLocaleTimeString();
    this.setState({ time: new Date() });
  }, 1000);

  componentDidMount() {
    return this.interval;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <>
        <div>
          <h3 className="display-2 text-center">
            {`Clock №${name}`}
          </h3>
          <p className="display-2 text-primary text-center">
            {time.toLocaleTimeString()}
            {console.log(time.toLocaleTimeString())}
          </p>
        </div>
      </>
    );
  }
}
