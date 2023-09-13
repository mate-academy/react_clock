import React from 'react';

type State = {
  time: string,
};

type Props = {
  clockName: string
};

function getTime() {
  return new Date().toUTCString().slice(-12, -4);
}

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: getTime(),
  };

  interval = 0;

  componentDidMount() {
    this.interval = window.setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  updateTime = () => {
    const newTime = getTime();

    this.setState({ time: newTime });

    // eslint-disable-next-line no-console
    console.info(this.state.time);
  };

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.time}
        </span>
      </div>
    );
  }
}
