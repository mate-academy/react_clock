import React from 'react';

type Props = {
  name: number;
};
type State = {
  date: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  private clock: NodeJS.Timeout | undefined;

  componentDidMount() {
    this.tick();
  }

  componentWillUnmount() {
    if (this.clock) {
      clearInterval(this.clock);
    }
  }

  tick() {
    this.clock = setInterval(() => {
      this.setState({
        date: new Date(),
      });
      // eslint-disable-next-line no-console
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  render() {
    return (
      <div>
        <p>
          {'Current time: '}
          {this.state.date.toLocaleTimeString()}
        </p>
      </div>
    );
  }
}
