/* eslint-disable react/state-in-constructor */
import './App.scss';
import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date;
  clockName: string;
  timerId?: number;
};

export class Clock extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      today: new Date(),
      clockName: this.props.name,
    };
  }

  // This code starts a timer

  componentDidMount(): void {
    this.setState({
      timerId: window.setInterval(() => {
        const newDate = new Date();

        // eslint-disable-next-line no-console
        console.log(newDate.toUTCString().slice(-12, -4));
        this.setState({ today: newDate });
      }, 1000),
    });
  }

  // this code stops the timer

  componentWillUnmount(): void {
    window.clearInterval(this.state.timerId);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render(): React.ReactNode {
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
