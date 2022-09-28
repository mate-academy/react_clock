import { Component } from 'react';

type State = {
  today: Date;
};

export class CurrentTime extends Component<{}, State> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const today = new Date();

      this.setState({ today });

      console.info(today.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { today } = this.state;

    return (
      <span className="Clock__time">
        {today.toLocaleTimeString()}
      </span>
    );
  }
}
