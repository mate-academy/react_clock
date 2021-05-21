import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();

    this.state = {
      time: new Date().toLocaleTimeString(),
      status: true,
      count: 0,
    };
  }

  componentDidMount() {
    this.inter = () => {
      console.log(new Date().toLocaleTimeString());
      this.setState({ time: new Date().toLocaleTimeString() });
      clearInterval(this.randomInterId);
    };

    this.interId = setInterval(this.inter, 1000);
  }

  componentDidUpdate() {
    this.name = (num) => {
      if (num !== this.state.count) {
        console.log(`The Clock was renamed from ${this.state.count} to ${num}`);
        this.setState({ count: num });
      }
    }
  }

  render() {
    return (
      <>
        {this.state.time}

        <br />

        <button
          type="button"
          onClick={() => {
            this.interId = setInterval(this.inter, 1000);
            this.setState({ status: true });
          }}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={() => {
            clearInterval(this.interId);
            this.setState({ time: '', status: false });
          }}
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={() => {
            if (this.state.status) {
              this.name(Math.floor(Math.random() * 100));
            }
          }}
        >
          Set random name
        </button>
      </>
    );
  }
}

export default Clock;
