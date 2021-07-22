import React from 'react';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    this.myTimer = setInterval(
      () => (this.doStep()),
      1000
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.clockName !== this.props.clockName) {
      const oldName = prevProps.clockName;
      const newName = this.props.clockName;

      console.log(`The Clock was renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.myTimer);
  }

  doStep() {
    this.setState({
      date: new Date().toLocaleTimeString(),
    });
    console.log(this.state.date);
  }

  render() {
    return (
      `${this.state.date}`
    );
  }

}
