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
  state: Readonly<State> = {
    date: new Date(),
  };

  timerId = 0;

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
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>
        {' time is '}

        <span className="Clock__time">
          {getTime(date)}
        </span>
      </div>
    );
  }
}
