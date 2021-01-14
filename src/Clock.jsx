import React from 'react';

export class Clock extends React.Component {
  state = {
    time: 0,
    timer: null,
  }

  componentDidMount() {
    this.setState({timer: setInterval(() => {
      const date = new Date();
      this.setState({time: date.toLocaleTimeString()})
      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000)});
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`)
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  render () {
    return (
        <div className="App">
          <h1>React clock</h1>
          <p>
            Current time:
            {' '}
            {this.state.time}
          </p>
        </div>
    )
  }
}
