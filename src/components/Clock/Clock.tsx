import React from 'react';
import './Clock.scss';

type Props = {
  name: number;
};

type State = {
  time: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: '',
  };

  timerId: NodeJS.Timer = setInterval(() => {}, 0);

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date: Date = new Date();

      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());

      this.setState({ time: date.toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from
      ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <span className="Time">
        {this.state.time}
      </span>
    );
  }
}
