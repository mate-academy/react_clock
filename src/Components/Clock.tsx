import React from 'react';

type State = {
  date: Date;
};

type Props = {
  name: string
};

class Clock extends React.Component<Props, State> {
  state: State = {
    date: new Date(),
  };

  timerId?: NodeJS.Timeout;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });

      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(_prevProps: Props) {
    if (_prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${_prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <>
        {this.state.date.toLocaleTimeString()}
      </>
    );
  }
}

export default Clock;
