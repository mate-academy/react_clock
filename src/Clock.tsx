import React from 'react';

type State = {
  time: string,
};

type Props = {
  name: number,
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: '',
  };

  timerId: NodeJS.Timer = setInterval(() => {}, 0);

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date = new Date().toLocaleTimeString();
      // eslint-disable-next-line
      console.log(date);
      this.setState({ time: date });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { time } = this.state;

    return (
      <span data-cy="time">
        {time}
      </span>
    );
  }
}
