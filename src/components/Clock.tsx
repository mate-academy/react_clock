import React from 'react';

type Props = {
  name: string;
  hasClock: boolean;
};

type State = {
  time: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: this.formatDate(),
  };

  timeTimerId: number | undefined;

  componentDidMount(): void {
    this.timeTimerId = window.setInterval(() => {
      const currentTime = this.formatDate(new Date());

      this.setState({ time: currentTime });
      if (this.props.hasClock) {
        // eslint-disable-next-line no-console
        console.log(currentTime);
      }
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timeTimerId);
  }

  formatDate(date?: Date): string {
    const now = date || new Date();

    return now.toUTCString().slice(-12, -4);
  }

  render() {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}
