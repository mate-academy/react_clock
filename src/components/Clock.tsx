import React from 'react';

interface State {
  time: string;
}

interface Props {
  name: string;
}

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  timeId2 = 0;

  componentDidMount(): void {
    this.timeId2 = window.setInterval(() => {
      const currentTime = new Date().toUTCString().slice(-12, -4);

      // eslint-disable-next-line no-console
      console.log(currentTime);
      this.setState({ time: currentTime });
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timeId2);
  }

  render() {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}
