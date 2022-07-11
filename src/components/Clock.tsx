import React from 'react';

type Props = {
  name: string
  isClockVisible: boolean;
};

type State = {
  date: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  public timerId!: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date(),
      });

      const { date } = this.state;

      // eslint-disable-next-line no-console
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    const { name } = this.props;

    if (prevProps.name !== name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevProps.name} to ${name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;

    const { isClockVisible, name } = this.props;

    return (
      <div className="Clock" data-cy="time">
        <h1>
          React clock
          {' '}
          {name || 'Unknown Fruit'}
        </h1>
        <p>
          Current time:
          {' '}
          {isClockVisible && date.toLocaleTimeString()}
        </p>
      </div>
    );
  }
}
