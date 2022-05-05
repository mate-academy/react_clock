import React from 'react';

type Props = {
  clockName: number,
};

type State = {
  time: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  timerId: NodeJS.Timer = setInterval(() => {}, 0);

  componentDidMount() {
    // eslint-disable-next-line
    console.log(`Start clock #${this.props.clockName}`)

    this.timerId = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });

      // eslint-disable-next-line
      console.log(`${this.state.time}`)
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.clockName !== prevProps.clockName) {
      // eslint-disable-next-line
      console.log(
        `The Clock was renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    // eslint-disable-next-line
    console.log(`Stop clock #${this.props.clockName}`)

    clearInterval(this.timerId);
  }

  render() {
    return (
      <p data-cy="time" className="app__clock">
        {'Current time: '}
        {this.state.time}
      </p>
    );
  }
}
