import { Component } from 'react';

type Props = {
  clockName: string,
  date: Date,
};

export class Clock extends Component<Props, {}> {
  componentDidUpdate(prevProp: Props) {
    if (prevProp.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.log(`Ranemed from ${prevProp.clockName} to ${this.props.clockName}`);
    }

    // eslint-disable-next-line no-console
    console.log(this.props.date.toLocaleTimeString());
  }

  render() {
    const date = this.props.date.toLocaleTimeString();

    return (
      <>
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date}
        </span>
      </>
    );
  }
}
