import React from 'react';

type Props = {
  name: number,
};

type State = {
  date: Date;
};

export class Clock extends React.Component<Props, State> {
  timerId?: NodeJS.Timer;

  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });

      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
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
      <span>
        <strong>{this.state.date.toLocaleTimeString()}</strong>
        <br />
        Name:
        {' '}
        {this.props.name}
      </span>
    );
  }
}
