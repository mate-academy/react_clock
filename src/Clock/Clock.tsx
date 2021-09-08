/* eslint-disable no-console */
import React from 'react';

type Props = {
  name: string,
};

type State = {
  clockName: string,
  time: string,
};

let clockTypeName = '0';

export class Clock extends React.PureComponent<Props, State> {
  newClockName = '';

  check = new Date().toLocaleTimeString();

  state = {
    clockName: 'React Clock:',
    time: new Date().toLocaleTimeString(),
  };

  clock = 0;

  componentDidMount() {
    this.setState({ time: new Date().toLocaleTimeString() });

    this.clock = window.setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
      console.log(this.state.time);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  render() {
    const clockNamePrev = `${clockTypeName}`;
    const { name } = this.props;

    clockTypeName = name;

    if (clockTypeName !== clockNamePrev) {
      console.log(`The Clock was renamed from ${clockNamePrev} to ${clockTypeName}`);
    }

    this.newClockName = `${this.state.clockName} ${name}`;

    return (
      <>
        <>
          <h1>
            {this.newClockName}
          </h1>
          <p>
            {`Current time: ${this.state.time}`}
          </p>
        </>
      </>
    );
  }
}
