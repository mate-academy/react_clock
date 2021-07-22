import React from 'react';

export class Clock extends React.Component {
  state = {
    date: new Date(),
    isClockVisible: true,
    clockName: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    // eslint-disable-next-line no-console
    console.log(this.state.date.toLocaleTimeString());

    if (prevState.clockName !== this.state.clockName) {
      const prevName = prevState.clockName;
      const currName = this.state.clockName;

      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevName} to ${currName}`);
    }
  }

  render() {
    const { date, isClockVisible } = this.state;

    return (
      <div className="box">
        <div className="block clock">
          {isClockVisible ? (
            `${date.toLocaleTimeString()}`
          ) : (
            `clock is hidden now`
          )}
        </div>
        <div className="buttons">
          <button
            className="button is-success is-medium is-outlined is-rounded"
            type="button"
            onClick={() => {
              this.state.isClockVisible = !this.state.isClockVisible;
            }}
          >
            Show/Hide clock
          </button>
          <button
            className="button is-info is-medium is-outlined is-rounded"
            type="button"
            onClick={() => {
              this.setState({ clockName: Math.floor(Math.random() * 100) });
            }}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}
