import React from 'react';

type State = {
  date: string,
};

type Props = {
  clockName: string,
};

const getDate = () => new Date().toUTCString().slice(-12, -4);

export class Clock extends React.Component<Props, State> {
  state = {
    date: getDate(),
  };

  dateTimerId: number | null = null;

  componentDidMount() {
    this.dateTimerId = window.setInterval(() => {
      const date = getDate();

      this.setState({ date });
      // eslint-disable-next-line no-console
      console.info(date);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    if (this.dateTimerId) {
      window.clearInterval(this.dateTimerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {`${this.state.date}`}
        </span>
      </div>
    );
  }
}
