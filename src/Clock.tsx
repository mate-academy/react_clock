import React from 'react';

type Props = {
  name: number;
}

type State = {
  time: string;
}

class Clock extends React.Component<Props, State> {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  updateTime: number | undefined;

  componentDidMount() {
    this.updateTime = window.setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
  
      console.log(this.state.time);
    }, 1000);
  }
  
  componentDidUpdate(prevProps: Props) {
    const {name} = prevProps;
  
    if (name != this.props.name) {
  
      console.log(`The clock was ranamed form ${name} to ${this.props.name}`)
    }
  }
  
  componentWillUnmount() {
    clearInterval(this.updateTime);
  }

  render() {
    const { time } = this.state;

    return (
      <>
        {time}
      </>
    );
  }
}

export default Clock;