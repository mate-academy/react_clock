import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  today: Date;
};

class Clock extends React.Component<Props> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(this.handleChangeTime, 1000);
  }

  shouldComponentUpdate(nextProps: any, nextState: State): boolean {
    if (nextState.today === this.state.today) {
      return false;
    }

    return true;
  }

  componentDidUpdate(): void {
    // eslint-disable-next-line no-console
    console.log(this.state.today.toUTCString().slice(-12, -4));
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  handleChangeTime = () => {
    this.setState({ today: new Date() });
  };

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}

export default Clock;
