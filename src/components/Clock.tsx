import React from 'react';

type Props = {};

type State = {
  date: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: '',
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const newDate: Date = new Date();

      this.setState({ date: newDate.toLocaleTimeString() });
    }, 1000);
  }

  render(): React.ReactNode {
    return (
      <span>{this.state.date}</span>
    );
  }
}
