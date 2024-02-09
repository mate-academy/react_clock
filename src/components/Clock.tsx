import { Component } from 'react';

interface ClockProps {
  name: string;
}

export class Clock extends Component<ClockProps> {
  componentDidUpdate(prevProps: ClockProps): string {
    return (`Renamed from ${prevProps.name} to ${this.props.name}`);
  }

  render() {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>
        {' time is '}
        <span className="Clock__time">
          {new Date().toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
