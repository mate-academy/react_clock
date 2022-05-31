import React from 'react';

type State = {
  date: string,
};

type Props = {
  name: number,
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: '',
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date = new Date();

      this.setState({
        date: date.toLocaleTimeString(),
      });

      // eslint-disable-next-line no-console
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { date } = this.state;

    return (
      <strong data-cy="time">
        {date}
      </strong>
    );
  }
}
