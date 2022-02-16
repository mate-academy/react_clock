import React from 'react';

type Props = {
  name: string,
};

type State = {
  time: string,
  timerId: NodeJS.Timer,
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date().toLocaleTimeString(),
    timerId: setTimeout(() => {}, 0),
  };

  componentDidMount() {
    this.setState({
      timerId: setInterval(() => {
        const date: Date = new Date();

        // eslint-disable-next-line
        console.log(date.toLocaleTimeString());
        this.setState({ time: date.toLocaleTimeString() });
      }, 1000),
    });
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render() {
    const { time } = this.state;

    return (
      <p>
        Current time:
        {' '}
        {time}
      </p>
    );
  }
}
