/* eslint-disable no-console */
import { Component, ReactNode } from 'react';

type State = {
  today: Date;
};

type Props = {
  name: string;
};

function formattedDate(date: Date): string {
  return date.toUTCString().slice(-12, -4);
}

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({
        today: new Date(),
      });

      console.info(formattedDate(this.state.today));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const prevName = prevProps.name;
    const currName = this.props.name;

    if (prevName !== currName) {
      console.debug(`Renamed from ${prevName} to ${currName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render(): ReactNode {
    const { today } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {formattedDate(today)}
        </span>
      </div>
    );
  }
}
