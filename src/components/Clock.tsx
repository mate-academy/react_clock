import React from 'react';

type Props = {
  name: number;
};

type State = {
  time: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });

      // eslint-disable-next-line
      console.log(this.state.time);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps !== this.props) {
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
    const { time } = this.state;

    return (
      <>
        <p>
          Current time:
          {' '}
          {time}
        </p>

        <p>
          Name:
          {' '}
          {this.props.name}
        </p>
      </>
    );
  }
}
