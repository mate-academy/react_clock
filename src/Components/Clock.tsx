import React from 'react';
import './Clock.scss';

type State = {
  time: Date;
};

type Props = {
  name: number;
};

export class Clock extends React.Component<Props, State> {
  timerId: NodeJS.Timer = setInterval(() => {}, 0);

  state = {
    time: new Date(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        time: new Date(),
      });

      // eslint-disable-next-line
      console.log(this.state.time.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate({ name: oldName }: Props) {
    const { name } = this.props;

    if (oldName !== name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${oldName} to ${name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { time } = this.state;

    return (
      <p className="Clock">
        {'Current time: '}
        {time.toLocaleTimeString()}
      </p>
    );
  }
}
