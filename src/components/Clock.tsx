import React from 'react';

type Props = {
  name: number,
};

type State = {
  time: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  timerId?: NodeJS.Timeout;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date = new Date().toLocaleTimeString();

      this.setState({ time: date });

      // eslint-disable-next-line
      console.log(date);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name } = prevProps;

    if (name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`Rendom name was ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <p>
        Current time:
        {this.state.time}
      </p>
    );
  }
}
