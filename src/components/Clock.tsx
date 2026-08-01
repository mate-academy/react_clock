import React from 'react';

export class Clock extends React.Component<{ name: string }> {
  clockId = 0;

  state = {
    today: new Date(),
    // This code starts a timer
  };

  componentDidMount() {
    const currentData = new Date();

    this.setState({ today: currentData });
    this.clockId = window.setInterval(() => {
      const nextData = new Date();

      this.setState({ today: nextData });
      // eslint-disable-next-line no-console
      console.log(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: { name: string }) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    // this code stops the timer
    window.clearInterval(this.clockId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">
          <span>{this.state.today.toUTCString().slice(-12, -4)}</span>
        </span>
      </div>
    );
  }
}
