import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();

    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    this.inter = () => {
      console.log(new Date().toLocaleTimeString());
      this.setState({ time: new Date().toLocaleTimeString() });
      clearInterval(this.randomInterId);
    };

    this.interId = setInterval(this.inter, 1000);

    this.randomInter = () => {
      let hour = this.state.h;
      let minute = this.state.m;
      let second = this.state.s;

      second += 1;

      if (second > 59) {
        second = 0;
        minute += 1;
      }

      if (minute > 59) {
        minute = 0;
        hour += 1;
      }

      if (hour > 23) {
        hour = 0;
      }

      this.setState({
        h: hour, m: minute, s: second,
      });

      const stand
      = (
        `${hour < 10 ? `0${hour}` : `${hour}`}:`
        +
        `${minute < 10 ? `0${minute}` : `${minute}`}:`
        +
        `${second < 10 ? `0${second}` : `${second}`}`
      );

      console.log(stand);
      this.setState({ time: stand });
      clearInterval(this.interId);
    };

    this.randomInterId = setInterval(this.randomInter, 1000);

    this.clockName = (count) => {
      const result = 0;

      if (count > result) {
        console.log('The Clock was renamed from oldName to newName');
      }
    };
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
            clearInterval(this.randomInterId);
          }}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={() => {
            clearInterval(this.interId);
            clearInterval(this.randomInterId);
            this.setState({ time: '' });
          }}
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={() => {
            let value = 0;

            value += 1;

            this.clockName(value);

            this.randomInterId = setInterval(this.randomInter, 1000);
            clearInterval(this.interId);
            this.setState({
              h: Math.floor(Math.random() * 24),
              m: Math.floor(Math.random() * 59),
              s: Math.floor(Math.random() * 59),
            });
          }}
        >
          Set random name
        </button>
      </>
    );
  }
}

export default Clock;
