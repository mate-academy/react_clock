/* eslint-disable no-console */
import React from 'react';

type Props = {
  name: string,
  isClockVisible: boolean,
};

type State = {
  clockName: string,
  time: string,
};

export class Clock extends React.PureComponent<Props, State> {
  newClockName = '';

  clockTypeName = '0';

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

  componentDidUpdate(prev:Props) {
    if (!prev.isClockVisible) {
      this.componentDidMount();
    }
  }

  render() {
    const clockNamePrev = `${this.clockTypeName}`;
    const { name, isClockVisible } = this.props;

    this.clockTypeName = name;

    if (this.clockTypeName !== clockNamePrev) {
      console.log(`The Clock was renamed from ${clockNamePrev} to ${this.clockTypeName}`);
    }

    if (!isClockVisible) {
      clearInterval(this.clock);
    }

    this.newClockName = `${this.state.clockName} ${name}`;

    return (
      <>
        {isClockVisible && (
          <>
            <h1>
              {this.newClockName}
            </h1>
            <p>
              {`Current time: ${this.state.time}`}
            </p>
          </>
        )}
      </>
    );
  }
}
