import React from 'react';

interface Props {
  name: number;
}

interface State {
  date: Date;
}

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId?: NodeJS.Timeout;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });

      // eslint-disable-next-line no-console
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
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
        <h2>
          Current name:
          {' '}
          {this.props.name}
        </h2>
        <h2>
          Current time:
          {' '}
          {this.state.date.toLocaleTimeString()}
        </h2>
      </>

    );
  }
}
