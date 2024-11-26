import React from 'react';

interface Props {
  name: string;
}

interface State {
  today: Date;
}

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
  };

  timerId = 0;

  handleToday = () => {
    this.setState(() => {
      const newDate = new Date();

      // eslint-disable-next-line no-console
      console.log(newDate.toUTCString().slice(-12, -4));

      return { today: newDate };
    });
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(this.handleToday, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const { name } = this.props;

    if (prevProps.name !== name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
