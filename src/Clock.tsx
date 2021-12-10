import { Component } from 'react';

type State = {
  time: string;
};

type Props = {
  name: string;
};

export class Clock extends Component<Props, State> {
  timerId: NodeJS.Timer = setInterval(() => {}, 0);

  state = {
    time: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(this.state.time);
    }, 1000);
  }

  componentDidUpdate(oldName: Props) {
    const newName = this.props;

    if (oldName !== newName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${oldName.name} to ${newName.name}`);
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
      <p>{time}</p>
    );
  }
}
