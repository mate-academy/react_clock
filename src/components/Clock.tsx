import React from 'react';

type State = {
  today: Date,
};

type Prop = {
  name: string,
};

export class Clock extends React.Component<Prop, State> {
  state = {
    today: new Date(),
  };

  setDate = 0;

  componentDidMount() {
    this.setDate = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setDate);
  }

  render() {
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
