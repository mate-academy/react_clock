import React from 'react';

export class Time extends React.Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  render() {
    const { date } = this.state;

    return (
      <>
        {date.toLocaleTimeString()}
      </>
    );
  }
}
