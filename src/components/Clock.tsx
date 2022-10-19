import React from 'react';

type Props = {
  name: string,
};

type State = {
  clockTime: string,
};

function getTime(): string {
  return new Date().toUTCString().slice(-12, -4);
}

export class Clock extends React.Component<Props, State> {
  state = {
    clockTime: getTime(),
  };

  timeTimerId = 0;

  componentDidMount() {
    this.timeTimerId = window.setInterval(() => {
      this.setState({ clockTime: getTime() });
      // eslint-disable-next-line no-console
      console.info(this.state.clockTime);
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timeTimerId);
  }

  render() {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.clockTime}
        </span>
      </div>
    );
  }
}
