/* eslint-disable no-console */
import { Component } from 'react';
import './App.scss';

type Props = {
  clockName: string,
};

type State = {
  date: Date,
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { clockName: oldName } = prevProps;
    const { clockName: newName } = this.props;

    if (prevState.date !== this.state.date) {
      console.log(this.state.date.toLocaleTimeString());
    }

    if (prevProps.clockName !== this.props.clockName) {
      console.log(`Renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;
    const { clockName } = this.props;
    const timeString = date.toLocaleTimeString();

    return (
      <>
        Time -
        <div className="Clock__time">
          {timeString}
        </div>
        <div className="Clock__name">
          {clockName}
        </div>
      </>
    );
  }
}
