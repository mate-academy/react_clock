import React from 'react';

interface Props {
  name: number;
}

interface State {
  time: string;
}

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const newTime = new Date().toLocaleTimeString();

      // eslint-disable-next-line no-console
      console.log(newTime);
      this.setState({ time: newTime });
    }, 1000);
  }

  componentDidUpdate(prevProp: Props) {
    if (prevProp.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevProp.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <p className="has-text-link is-size-2" data-cy="time">
        {`Current time: ${this.state.time}`}
      </p>
    );
  }
}
