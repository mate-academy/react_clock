import React from 'react';

type Props = {
  clockName: string,
};

export class Clock extends React.Component<Props> {
  state = {
    time: new Date(),
    timerId: 0,
  };

  componentDidMount() {
    this.setState({
      time: new Date(),
    });

    const timerId = window.setInterval(() => {
      this.setState({
        time: new Date(),
      });
    }, 1000);

    // eslint-disable-next-line no-console
    console.info(this.state.time.toUTCString().slice(-12, -4));
    this.setState({ timerId });
  }

  componentWillUnmount() {
    if (this.state.timerId) {
      clearInterval(this.state.timerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
