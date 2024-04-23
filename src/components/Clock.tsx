import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: this.getCurrentTime(),
  };

  timer = 0;

  getCurrentTime(): string {
    return new Date().toUTCString().slice(-12, -4);
  }

  componentDidMount(): void {
    this.timer = window.setInterval(() => {
      this.setState({ today: this.getCurrentTime() });
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timer);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.today !== this.state.today) {
      // eslint-disable-next-line no-console
      console.log(this.state.today);
    }

    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    const { today } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{today}</span>
      </div>
    );
  }
}
