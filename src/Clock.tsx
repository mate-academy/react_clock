import React from 'react';

type State = {
  hasClock: boolean;
  time: string;
};

type Props = {
  name: string;
};

let intId: number | null = null;

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    hasClock: true,
    time: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    intId = window.setInterval(() => {
      const today = new Date().toUTCString().slice(-12, -4);

      window.console.info(today);
      this.setState((previousState) => ({ ...previousState, time: today }));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.name !== prevProps.name) {
      window.console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(intId as number);
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>
        {' time is '}
        <span className="Clock__time">
          {time}
        </span>
      </div>
    );
  }
}
