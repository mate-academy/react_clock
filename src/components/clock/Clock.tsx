import React from 'react';

interface State {
  time: string,
  isClockVisible: boolean,
}

interface Props {
  name: number,
}

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date().toLocaleTimeString(),
    isClockVisible: true,
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date: Date = new Date();

      this.setState({ time: date.toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    // eslint-disable-next-line no-console
    console.log(
      `The Clock was renamed from ${prevProps.name} to ${this.props.name}`,
    );
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
  }

  render(): React.ReactNode {
    return (
      <p data-cy="time" className="clock-box__contetn">
        {' '}
        {(this.state.isClockVisible) && (this.state.time)}
      </p>

    );
  }
}
