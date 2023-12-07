import React from 'react';

interface Props {
  name: string,
}

export class Clock extends React.Component<Props> {
  state = {
    date: new Date(),
  };

  intervalId = 0;

  componentDidMount(): void {
    this.setState({ date: new Date() });

    this.intervalId = window.setInterval(() => {
      const newDate = new Date();

      this.setState({ date: newDate });

      // eslint-disable-next-line no-console
      console.info(this.getTimeFromDate(newDate));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    const oldName = prevProps.name;
    const newName = this.props.name;

    if (newName !== oldName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.intervalId);
  }

  getTimeFromDate = (date: Date) => date.toUTCString().slice(-12, -4);

  render() {
    const { name } = this.props;
    const { date } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.getTimeFromDate(date)}
        </span>
      </div>
    );
  }
}
