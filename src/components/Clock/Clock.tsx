import React from 'react';

type Props = {
  name: string,
};

type State = {
  time: string,
};

export class Clock extends React.Component<Props, State> {
  timerId: NodeJS.Timer = setTimeout(() => {}, 0);

  state = {
    time: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    // eslint-disable-next-line
    console.log(this.state.time);

    this.timerId = setInterval(() => {
      const date: Date = new Date();

      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
      this.setState({ time: date.toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
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
