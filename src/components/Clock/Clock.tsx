import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  time: string;
};

export class Clock extends React.Component<Props, State> {
  // eslint-disable-next-line
  getCurrentDate = () => (
    new Date().toLocaleTimeString('en-GB')
  );

  timerId?: NodeJS.Timeout;

  state = {
    time: this.getCurrentDate(),
  };

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentDidUpdate({ clockName }: Readonly<Props>) {
    if (clockName !== this.props.clockName) {
      // eslint-disable-next-line
      console.log(
        'Property (clockName) has been changed'
        + `from ${clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  tick() {
    this.setState({
      time: this.getCurrentDate(),
    });
  }

  render() {
    return (
      <div className="Clock">
        <h2 className="Clock__time">
          {this.state.time}
        </h2>
      </div>
    );
  }
}
