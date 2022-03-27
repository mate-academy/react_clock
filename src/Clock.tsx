import React from 'react';

interface Props {
  name: number;
}

interface State {
  date: Date;
  timerId: NodeJS.Timer | undefined;
}

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
    timerId: undefined,
  };

  componentDidMount() {
    const timerId: NodeJS.Timer = setInterval(() => {
      this.setState({ date: new Date() });

      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);

    this.setState({ timerId });
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render() {
    return (
      <p>
        Current time:
        {' '}
        {this.state.date.toLocaleTimeString()}
      </p>
    );
  }
}
