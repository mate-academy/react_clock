/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';

export class Clock extends React.Component {
  state = {
    date: new Date(),
    name: 0,
    prevName: 0,
  }

  componentDidMount() {
    const button = document.querySelector('.new-name');

    button.addEventListener('click', this.handleName);
    setInterval(() => {
      const time = new Date();

      this.setState(state => ({
        date: time.toLocaleTimeString(),
        prevName: state.name,
        name: this.getRandomInt(10000),
      }));
    }, 1000);
  }

  handleName = () => {
    this.setState(state => ({
      prevName: state.name,
      name: this.getRandomInt(10000),
    }));
  }

  getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

  render() {
    const { date, name, prevName } = this.state;

    return (
      <>
        <strong>
          {date.toString()}
        </strong>
        <br />
        <>
          The Clock was renamed from
          {' '}
          {prevName}
          {' '}
          to
          {' '}
          {name}
        </>
      </>
    );
  }
}
