import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: string;
};

export class Clock extends React.PureComponent<Props, State> {
  state: State = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  timerValue: number | undefined;

  componentDidMount(): void {
    this.timerValue = window.setInterval(() => {
      this.setState({ today: new Date().toUTCString().slice(-12, -4) });
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }

    if (prevState.today !== this.state.today) {
      // eslint-disable-next-line no-console
      console.log(this.state.today);
    }
  }

  componentWillUnmount(): void {
    if (this.timerValue) {
      window.clearInterval(this.timerValue);
    }
  }

  render() {
    const { name } = this.props;

    return (
      name && (
        <div className="Clock">
          <strong className="Clock__name">{name}</strong>
          {' time is '}
          <span className="Clock__time">{this.state.today}</span>
        </div>
      )
    );
  }
}
