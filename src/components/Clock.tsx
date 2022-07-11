import { Component } from 'react';

type Props = {
  name: string,
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
      const date = new Date();

      // eslint-disable-next-line no-console
      console.log(date.toLocaleTimeString());

      this.setState({ date });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="clock">
        <h2>Clock Name:</h2>
        <h3>
          {this.props.name}
        </h3>

        <hr />

        <h2>Current Date:</h2>
        <h4>
          {this.state.date.toLocaleString()}
        </h4>
      </div>
    );
  }
}
