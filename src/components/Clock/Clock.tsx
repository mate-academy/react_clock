import React from 'react';

type State = {
  date: Date;
};

type Props = {
  name: number;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    date: new Date(),
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date(),
      });

      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const prevName = prevProps.name;
    const currentName = this.props.name;

    if (prevName !== currentName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevName} to ${currentName}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { date } = this.state;

    return (
      <span>
        {date.toLocaleTimeString()}
      </span>
    );
  }
}
