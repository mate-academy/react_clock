import React from 'react';

interface Props {
  today: Date;
  clockName: string;
}

export class Clock extends React.Component<Props> {
  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        <div className="Clock">
          <strong className="Clock__name">{this.props.clockName}</strong>

          {' time is '}

          <span className="Clock__time">
            {this.props.today.toUTCString().slice(-12, -4)}
          </span>
        </div>
      </div>
    );
  }
}
