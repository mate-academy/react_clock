import React from 'react';
import './Clock.scss';

type Props = {
  name: string,
};

type State = {
  timerId: NodeJS.Timer,
  date: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    timerId: setInterval(() => {}, 0),
    date: '',
  };

  componentDidMount() {
    this.state.timerId = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });

      // eslint-disable-next-line
      console.log('Clock: ' + this.state.date);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render() {
    return (
      <>
        <span className="clock__time">{this.state.date}</span>
        <p className="clock__name">{`ClassName: ${this.props.name}`}</p>
      </>
    );
  }
}
