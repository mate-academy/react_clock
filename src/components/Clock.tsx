import React from 'react';
import { getRandomName } from '../services/RandomName';

type State = {
  today: Date,
  name: string,
};

type Props = {
  name: string,
};

export class Clock extends React.PureComponent<Props, State> {
  state: State = {
    today: new Date(),
    name: 'Clock-0',
  };

  // This code starts a timer
  timerId = 0;

  // eslint-disable-next-line no-console
  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.info(new Date());
      this.state.today.toUTCString().slice(-12, -4);
    }, 1000);
    // eslint-disable-next-line no-console
    console.info('componentDidMount');
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    this.timerId = window.setInterval(() => {
      this.state.name = getRandomName();
    }, 3300);
  }

  // this code stops the timer
  componentWillUnmount(): void {
    // eslint-disable-next-line no-console
    console.info('componentWilLUnmount');
    window.clearInterval(this.timerId);
  }

  render() {
    const { today, name } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}

/*
   timerId = window.setInterval(() => {
    this.state.name = getRandomName();
  }, 3300);
*/

/*
import React from 'react';
import { getRandomName } from '../services/RandomName';

function getToday(): string {
  const today = new Date();

  return today.toUTCString().slice(-12, -4);
}

type State = {
  today: Date,
  name: string,
};

type Props = {
  name: string,
};

export class Clock extends React.PureComponent<Props, State> {
  state: State = {
    today: new Date(),
    name: 'Clock-0',
  };

  // This code starts a timer
  timerId = 0;

  // eslint-disable-next-line no-console
  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.info(new Date());
      this.setState({ today: getToday() });
    }, 1000);
    // eslint-disable-next-line no-console
    console.info('componentDidMount');
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>
  ): void {
    this.timerId = window.setInterval(() => {
      this.state.name = getRandomName();
    }, 3300);
  }

  // this code stops the timer
  componentWillUnmount(): void {
    // eslint-disable-next-line no-console
    console.info('componentWilLUnmount');
    window.clearInterval(this.timerId);
  }

  render() {
    const { today, name } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
*/
