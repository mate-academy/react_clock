import React from 'react';

interface Props {
  name: string;
}

interface State {
  today: Date;
  hasClock: boolean;
  ticker: undefined | number;
}

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
    hasClock: true,
    ticker: undefined,
  };

  handleTime = () => {
    this.setState({ today: new Date() });
  };

  componentDidMount(): void {
    this.setState({ ticker: window.setInterval(this.handleTime, 1000) });
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.today !== this.state.today) {
      // eslint-disable-next-line no-console
      console.log(this.state.today.toUTCString().slice(-12, -4));
    }

    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.state.ticker);
  }

  render(): React.ReactNode {
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
