import React from 'react';

type Props = {
  name: string;
};

export class Clock extends React.Component<Props, {}> {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  timerId: NodeJS.Timer = setInterval(() => {});

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date: Date = new Date();

      this.setState({ time: date.toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(this.state.time);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`)
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <div className="clock">
        <h1>
          My clock &#9200;
        </h1>
        <h3 className="h1">
          {`It's time to: ${name}`}
        </h3>
        <p data-cy="time" className="time">
          Current time:
          {` ${time}`}
        </p>
      </div>
    );
  }
}
