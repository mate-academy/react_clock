import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
  };

  timerId = 0;

  handlePrintConsole = (val: Date): void => {
    // eslint-disable-next-line no-console
    console.log(val.toUTCString().slice(-12, -4));
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState(currentState => {
        const newToday = new Date();

        this.handlePrintConsole(newToday);

        return {
          ...currentState,
          today: newToday,
        };
      });
    }, 1000);
  }

  componentDidUpdate(
    prewProps: Readonly<Props>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    __prewState: Readonly<State>,
  ): void {
    if (prewProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prewProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
