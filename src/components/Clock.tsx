import React from 'react';

type Props = {
  name: string;
};

type State = {
  currentDay: Date;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    currentDay: new Date(),
  };

  timer = 0;

  componentDidMount(): void {
    this.timer = window.setInterval(() => {
      this.setState({ currentDay: new Date() });
      // eslint-disable-next-line no-console
      console.info(this.state.currentDay.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
  ): void {
    const { name } = prevProps;

    if (name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timer);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.currentDay.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
