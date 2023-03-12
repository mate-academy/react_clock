import React from 'react';

export type State = {
  date: Date;
};

export type Props = {
  name: string;
};

function getTime(date: Date): string {
  return date.toUTCString().slice(-12, -4);
}

export class Clock extends React.Component<Props, State> {
  timerId = 0;

  state: Readonly<State> = {
    date: new Date(),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const newDate = new Date();

      window.console.info(getTime(newDate));

      this.setState({ date: newDate });
    }, 1000);
  }

  componentDidUpdate(prevName: Props) {
    const { name } = this.props;
    const oldName = prevName.name;

    if (name !== oldName) {
      window.console.debug(`Renamed from ${oldName} to ${name}`);
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;

    return <span className="Clock__time">{getTime(date)}</span>;
  }
}
