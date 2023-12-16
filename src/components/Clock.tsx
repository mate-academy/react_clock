import React from 'react';

type Props = {
  clockName: string,
};

type State = {
  today: Date,
  timerId: NodeJS.Timer | null,
};

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
    timerId: null,
  };

  componentDidMount() {
    this.setState({
      timerId: setInterval(
        () => this.tick(),
        1000,
      ),
    });
  }

  componentWillUnmount() {
    if (this.state.timerId !== null) {
      clearInterval(this.state.timerId);
    }
  }

  tick() {
    this.setState({
      today: new Date(),
    });

    // eslint-disable-next-line no-console
    console.info(this.state.today.toUTCString().slice(-12, -4));
  }

  render() {
    const { clockName } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
