import React from 'react';

interface State {
  time: Date;
}

interface Props {
  clockName: number
}

export class Clock extends React.Component<Props> {
  timerId?: NodeJS.Timer;

  state:State = {
    time: new Date(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date() });
      // eslint-disable-next-line no-console
      console.log(this.state.time.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate({ clockName: oldName }: Props) {
    const { clockName: newName } = this.props;

    if (newName !== oldName) {
      // eslint-disable-next-line
      console.log(`Clock  now is  ${newName}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { time } = this.state;

    return (
      <div>
        <p>
          Current time:
          {' '}
          {time.toLocaleTimeString() }
        </p>
      </div>
    );
  }
}
