import React from 'react';

interface State {
  date: string,
}

interface Props {
  name: number,
}

export default class Clock extends React.Component<Props, State> {
  clockInterval?:number;

  state:State = {
    date: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.clockInterval = window.setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });

      console.log(this.state.date);
    }, 1000);
  }

  componentDidUpdate({ name }:Props) {
    if (this.props.name !== name) {
      console.log(`The Clock was renamed ${name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }

  render() {
    const { date } = this.state;

    return (
      <>
        {date}
      </>
    );
  }
}
