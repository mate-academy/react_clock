import React from 'react';

type Props = {
  name: string;
};

type State = {
  time: string;
  timeId: NodeJS.Timeout | null;
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date().toLocaleTimeString(),
    timeId: null,
  };

  timerId?: NodeJS.Timeout;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date: string = new Date().toLocaleTimeString();

      this.setState({ time: date });

      // eslint-disable-next-line no-console
      console.log(date);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`Te name of clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    const { timeId } = this.state;

    if (timeId) {
      clearInterval(timeId);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>{`${this.props.name}`}</h1>
        <p>{`Current time: ${this.state.time}`}</p>
      </div>
    );
  }
}
