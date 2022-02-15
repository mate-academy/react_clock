import React from 'react';

type State = {
  date: string;
  timerId: NodeJS.Timer;
};

type Props = {
  name: number;
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: 'Loading...',
    timerId: setInterval(() => {}, 0),
  };

  componentDidMount() {
    const timerId = setInterval(() => {
      const date = new Date().toLocaleTimeString();
      // eslint-disable-next-line
      console.log(date);

      this.setState({
        date,
        timerId,
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const oldName = prevProps.name;
    const newName = this.props.name;

    if (oldName !== newName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${oldName} to ${newName}`);
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
        {this.state.date}
      </p>
    );
  }
}
