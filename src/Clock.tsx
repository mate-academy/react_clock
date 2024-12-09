import React from 'react';
import './App.scss';

type Props = {
  name: string;
};

type State = {
  time: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  timerCount: number | null = null;

  componentDidMount(): void {
    this.timerCount = window.setInterval(() => {
      this.setState({
        time: new Date().toUTCString().slice(-12, -4),
      });
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    const prevName = prevProps.name;
    const newName = this.props.name;

    if (prevState.time !== this.state.time) {
      // eslint-disable-next-line no-console
      console.log(this.state.time);
    }

    if (prevName !== newName) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevName} to ${newName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerCount);
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
