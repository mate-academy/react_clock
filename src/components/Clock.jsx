import React from 'react';

export class Clock extends React.Component {
  state = {
    date: undefined,
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const date = new Date();
      this.setState({ date: date.toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(this.state.date);
    }, 1000);
  }

  componentDidUpdate(prevName) {
    if(this.props.name !== prevName.name) {
      // eslint-disable-next-line
      console.log('The Clock was renamed from oldName to newName!!!!')
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return(
      <>
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.date}
        </p>
      </>

    );
  }
}
