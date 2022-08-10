import React from 'react';

type Props = {
  clockName: string,
};

type State = {
  date: Date,
};

// eslint-disable-next-line react/prefer-stateless-function
export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { clockName } = prevProps;

    // eslint-disable-next-line no-console
    console.log(this.state.date.toLocaleTimeString());
    if (clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.log(`Renamed from ${clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>
        {' time is '}
        <span className="Clock__time">
          {this.state.date.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
