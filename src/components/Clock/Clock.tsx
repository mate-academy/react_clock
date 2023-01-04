import React from 'react';

type Props = {
  name: string,
};

type State = {
  today: Date,
};

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
  };

  intervalID = 0;

  componentDidMount() {
    this.intervalID = window.setInterval(() => this.updateTime(), 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalID);
  }

  updateTime() {
    this.setState({
      today: new Date(),
    });

    // eslint-disable-next-line no-console
    console.info(this.state.today.toUTCString().slice(-12, -4));
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        <span> time is </span>

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
