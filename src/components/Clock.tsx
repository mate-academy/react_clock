import React from 'react';

type Props = {
  name: string;
};

type State = {
  currentDate: Date;
};

export class Clock extends React.PureComponent<Props, State> {
  state: State = {
    currentDate: new Date(),
  };

  intervalId: number = 0;

  componentDidMount(): void {
    this.intervalId = window.setInterval(() => {
      const newDate = new Date();

      this.setState({ currentDate: newDate });

      // eslint-disable-next-line no-console
      console.log(newDate.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.intervalId);
  }

  render() {
    const { currentDate } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">
          {currentDate.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
