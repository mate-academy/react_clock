import React from "react";

type State = {
  time: Date,
}

type Props = {
  name: string,
}

export class Clock extends React.Component<Props, State> {

  state = {
    time: new Date(),
  }

  newTime = 0;

  componentDidMount(): void {
    this.newTime = window.setInterval(() => {
      this.setState({ time: new Date()})
    }, 1000)
    console.log(this.newTime)
  } // eslint-disable-next-line no-console console.log(this.state.time);

  componentWillUnmount(): void {
    window.clearInterval(this.newTime)
  }
  render() {

    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">
          {this.state.time.toUTCString().slice(-12, -4)}
        </span>
      </div>
      )
  }
}

