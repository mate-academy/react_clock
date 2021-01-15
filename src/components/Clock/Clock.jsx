import React from 'react';

export class Clock extends React.Component {
  state = {
    date: new Date(),
    name: getRandomInt(),
    visibility: false,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.date);
  }

  toggleVisibility = () => {
    this.setState(state => ({
      visibility: !state.visibility,
    }));
  }

  changeName = () => {
    this.setState((thisState) => {
      const randomizedName = getRandomInt();

      console.log(`The Clock was renamed from ${thisState.name} to
       ${randomizedName}`);

      return {
        name: randomizedName,
      };
    });
  }

  render() {
      return (
        <>
          <h1>
            Name -
            {' '}
            {this.state.name}
          </h1>
          <p>
            {this.state.visibility ? `Current time:
            ${this.state.date.toLocaleTimeString()}` : ''}
          </p>
          <p>
            <button onClick={this.toggleVisibility}>{this.visibility ? 'Hide' : 'Show clock'}</button>
          </p>
          <p>
            <button onClick={this.changeName}>Change name</button>
          </p>
        </>
      );
    }
}

function getRandomInt() {
  const min = 0;
  const max = 999;

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
