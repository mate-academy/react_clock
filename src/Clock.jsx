
import React from 'react';

export class Clock extends React.Component {
  state = {
    isClockVisible: this.props.isClockVisible,
    date: this.props.date,
  };

 componentDidMount() {
  setInterval(() => {
    this.setState({date: new Date(), isClockVisible: this.props.isClockVisible})
  }, 1000);
 }
 componentDidUpdate(prevProps) {
  if(prevProps.name !== this.props.name){
    console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`)
  }
 }

  render() {
      if(this.state.isClockVisible) {
        console.log(this.state.date.toLocaleTimeString())

        return (
          <div>{this.state.date.toLocaleTimeString()}</div>
        )
      }
      return <div></div>
  }
}
