import React from 'react';

type Props = {
  clockName: number
};

type State = {
  time: string | null
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  timerId: NodeJS.Timer = setInterval(() => {}, 0);

  componentDidMount() {
    this.timerId = setInterval(() => {
      const newDate: Date = new Date();

      this.setState({
        time: newDate.toLocaleTimeString(),
      });
      // eslint-disable-next-line no-console
      console.log(this.state.time);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from #${prevProps.clockName} to #${this.props.clockName} at:${this.state.time}.`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div data-cy="time">
        {this.state.time}
      </div>
    );
  }
}
