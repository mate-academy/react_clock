import React from 'react';

export class Clock extends React.Component {
  state = {
    date: new Date(),
    name: getRandomInt(),
    visibility: false,
  };

  constructor() {
    super();
    this.state = {
      visibility: false,
      name: getRandomInt(),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() });
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
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
    if (this.state.visibility) {
      return (
        <>
          <h1>
            Name -
            {' '}
            {this.state.name}
          </h1>
          <p>
            {visibility ? `Current time:
            ${this.state.date.toLocaleTimeString()}` : ''}
          </p>
          <p>
            <button onClick={this.toggleVisibility}>{visibility ? 'Hide' : 'Show clock'}</button>
          </p>
          <p>
            <button onClick={this.changeName}>Change name</button>
          </p>
        </>
      );
    }
  }
}

function getRandomInt() {
  const min = 0;
  const max = 999;

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
