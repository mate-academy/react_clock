import React from 'react';

type Props = {
  name: string;
};

type State = {
  currentDate: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    currentDate: this.newFormatDate(),
  };

  intervalId = 0;

  newFormatDate(): string {
    return new Date().toUTCString().slice(-12, -4);
  }

  updateCurrentDate = () => {
    const newDate = this.newFormatDate();

    this.setState({ currentDate: newDate });
    // eslint-disable-next-line no-console
    console.log(newDate);
  };

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentDidMount() {
    this.intervalId = window.setInterval(this.updateCurrentDate, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId);
  }

  render() {
    const { currentDate } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{currentDate}</span>
      </div>
    );
  }
}
