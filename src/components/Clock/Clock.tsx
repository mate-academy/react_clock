import React from 'react';

type Props = {
  name: string,
};

type State = {
  date: Date,
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    date: new Date(),
  };

  dateTimerId = 0;

  componentDidMount(): void {
    this.dateTimerId = window.setInterval(() => {
      const newDate = new Date();

      this.setState({ date: newDate });

      // eslint-disable-next-line no-console
      console.info(this.getTime(newDate));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.dateTimerId);
  }

  getTime = (date: Date): string => {
    return date.toUTCString().slice(-12, -4);
  };

  render() {
    const { date } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.getTime(date)}
        </span>
      </div>
    );
  }
}
