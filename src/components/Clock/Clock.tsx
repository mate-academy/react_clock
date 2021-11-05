import React from 'react';

import { State } from '../../type/StateForClock';
import { Props } from '../../type/PropsForClock';

export class Clock extends React.Component<Props, State> {
  state: State = {
    date: new Date(),
  };

  timerId: NodeJS.Timeout | null = null;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date1: Date = new Date();

      // eslint-disable-next-line
      console.log(date1.toLocaleTimeString());
      this.setState({ date: date1 });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const prevName = prevProps.name;
    const { name } = this.props;

    if (prevName !== name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevName} to ${name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { date } = this.state;

    return (
      <p>
        Current time:
        {' '}
        {date.toLocaleTimeString()}
      </p>
    );
  }
}
