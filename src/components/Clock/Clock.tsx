import { Component } from 'react';

import './Clock.scss';

type ClockName = number | string;

interface Props {
  name: ClockName;
}

interface State {
  clockName: ClockName;
  date: Date;
}

export class Clock extends Component<Props, State> {
  state: State = {
    clockName: this.props.name,
    date: new Date(),
  };

  timerId: NodeJS.Timer = setTimeout(() => {}, 0);

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });
      // eslint-disable-next-line no-console
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevProps.name}`
        + ` to ${prevState.clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { date, clockName } = this.state;

    return (
      <div className="clock">
        <span className="clock__name">{clockName}</span>
        <span className="clock__field">
          {': '}
          {date.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
