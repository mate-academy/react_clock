import React from 'react';

type Props = {
  name: string;
};

type State = {
  today?: Date;
  name: string;
};

export class Clock extends React.PureComponent<Props, State> {
  private clockTimerId: number | undefined;

  state: State = {
    today: new Date(),
    name: this.props.name,
  };

  componentDidMount(): void {
    this.clockTimerId = window.setInterval(() => {
      const currentTime = new Date();

      // eslint-disable-next-line no-console
      console.log(currentTime.toUTCString().slice(-12, -4));
      this.setState({ today: currentTime });
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    if (prevProps.name !== this.props.name) {
      this.setState({ name: this.props.name });
    }

    if (prevState.name !== this.state.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevState.name} to ${this.state.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.clockTimerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.state.name}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today?.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
