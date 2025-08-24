import React from 'react';

type Props = {
  name: string;
};

type State = {
  time: Date | null;
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: null,
  };

  timerCallback = () => {
    this.setState({
      time: new Date(),
    });

    // eslint-disable-next-line no-console
    console.log(this.state.time);
  };

  timer: number | undefined;

  handleTimer = () => {
    return this.timer;
  };

  mount() {
    this.setState({
      time: new Date(),
    });
    this.handleTimer();
  }

  unmount() {
    window.clearInterval(this.timer);
  }

  componentDidMount() {
    this.timer = window.setInterval(this.timerCallback, 1000);
    this.mount();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    this.unmount();
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.time
            ? this.state.time.toUTCString().slice(-12, -4)
            : null}
        </span>
      </div>
    );
  }
}
