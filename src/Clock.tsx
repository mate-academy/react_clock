import React from 'react';

type Props = {
  clockName: number,
};

type State = {
  date: Date,
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    date: new Date(),
  };

  setTime?: NodeJS.Timeout;

  componentDidMount() {
    this.setTime = setInterval(() => {
      this.setState({ date: new Date() });
      const date = new Date();

      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate({ clockName }:Props) {
    if (this.props.clockName !== clockName) {
      // eslint-disable-next-line
    console.log(`The clock was renamed `
    + `from ${clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    if (this.setTime) {
      clearInterval(this.setTime);
    }
  }

  dateUpdate = () => {
    this.setState({
      date: new Date(),
    });
  };

  render() {
    return (
      <div className="App">
        <h1>
          {'Clock # '}
          {this.props.clockName}
        </h1>
        <p>
          Current time:
          {' '}
          {this.state.date.toLocaleTimeString()}
        </p>
      </div>
    );
  }
}
