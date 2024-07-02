import React from 'react';

type Props = {
  name: string;
};

type State = {
  date: Date;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    date: new Date(),
  };

  getTime = (date: Date) => {
    return date.toUTCString().slice(-12, -4);
  };

  timerId = 0;

  clockName = 'Clock-0';

  componentDidMount(): void {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
    });

    this.timerId = window.setInterval(() => {
      this.setState(() => {
        const newDate = new Date();

        // eslint-disable-next-line no-console
        console.log(this.getTime(newDate));

        return { date: newDate };
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const oldName = prevProps.name;
    const newName = this.props.name;

    if (oldName !== newName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const nowday = this.state.date;
    const clocksName = this.props.name;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clocksName}</strong>

        {' time is '}

        <span className="Clock__time">{this.getTime(nowday)}</span>
      </div>
    );
  }
}
