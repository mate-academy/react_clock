import React from 'react';
import './Clock.scss';

type Props = {
  name: number;
};

type State = {
  time: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: '',
  };

  timerId: NodeJS.Timer = setInterval(() => {}, 0);

  componentDidMount() {
    const intervalCb = () => {
      const date: Date = new Date();
      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
      this.setState({
        time: date.toLocaleTimeString(),
      });
    };

    intervalCb();
    this.timerId = setInterval(intervalCb, 1000);
  }

  componentDidUpdate({ name }: Props) {
    if (name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <span className="Clock">
        {this.state.time}
      </span>
    );
  }
}
