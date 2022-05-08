import React from 'react';

type Props = {
  clockName: number
};

type State = {
  time: string
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date().toLocaleString(),
  };

  timerId = setInterval(() => {}, 1000);

  componentDidMount() {
    // eslint-disable-next-line
    console.log(`The Clock #${this.props.clockName} was showed at: ${this.state.time}.`);

    this.timerId = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    });
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from #${prevProps.clockName} to #${this.props.clockName} at:${this.state.time}.`);
    }
  }

  componentWillUnmount() {
    // eslint-disable-next-line
    console.log(`The Clock #${this.props.clockName} was hided at: ${this.state.time}.`);

    clearInterval(this.timerId);
  }

  render() {
    return (
      <div data-cy="time">
        {this.state.time.toLocaleString()}
      </div>
    );
  }
}
