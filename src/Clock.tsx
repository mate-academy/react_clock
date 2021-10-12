import React from 'react';

interface State {
  date: Date,
}

interface Props {
  name: string
  isClockVisible: boolean
}

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    setInterval(
      () => this.tick(), 1000,
    );
  }

  tick() {
    this.setState(() => {
      const date = new Date();

      if (!(this.props.isClockVisible)) {
      // eslint-disable-next-line no-console
        console.log(date.toLocaleTimeString());
      }

      return { date: new Date() };
    });
  }

  render() {
    return (
      <div>
        Current time:
        {' '}
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}
