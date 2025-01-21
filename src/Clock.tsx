import React from 'react';

type State = {
  today: string;
};

interface Props {
  name: string;
}

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  timerTimeId = 0;

  timerConsoleId = 0;

  componentDidMount(): void {
    this.timerTimeId = window.setInterval(() => {
      this.setState({ today: `${new Date().toUTCString().slice(-12, -4)}` });
    }, 1000);

    this.timerConsoleId = window.setInterval(() => {
      this.setState((prevState: Readonly<State>) => {
        // eslint-disable-next-line no-console
        console.log(prevState.today);
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerTimeId);
    window.clearInterval(this.timerConsoleId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.today}</span>
      </div>
    );
  }
}
