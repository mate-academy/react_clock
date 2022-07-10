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
      // eslint-disable-next-line no-console
      console.log(this.state.date.toLocaleTimeString());

      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="App">
        <div className="clock">
          <strong>
            {this.props.clockName}
          </strong>
          <br />
          {' time is '}
          <br />
          <p className="tablo">
            {this.state.date.toLocaleTimeString()}
          </p>
        </div>
      </div>
    );
  }
}
