import { Component } from 'react';
import './App.scss';

type Props = {
  clockName: string,
};

type State = {
  date: string,
};

export class Clock extends Component<Props, State> {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  timerId = 0;

  delay = 1000;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
      // eslint-disable-next-line
      console.info(this.state.date);
    }, this.delay);
  }

  componentDidUpdate(prevProps: Props) {
    const { clockName: prevName } = prevProps;
    const { clockName: currentName } = this.props;

    if (prevName !== currentName) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${prevName} to ${currentName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date}
        </span>
      </div>
    );
  }
}
