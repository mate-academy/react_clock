import React from 'react';
import './Clock.scss';

type Props = {
  clockName: number,
};

type State = {
  time: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: '',
  };

  componentDidMount() {
    const timerId: NodeJS.Timer = setInterval(() => {
      const date: string = new Date().toLocaleTimeString();

      this.setState({ time: date });

      // eslint-disable-next-line
      console.log(this.state.time);
    }, 1000);

    // eslint-disable-next-line
    console.log(timerId);
  }

  render() {
    const { time } = this.state;

    return (
      <p className="clock" data-cy="time">
        {time}
      </p>
    );
  }
}
