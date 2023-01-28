import React from 'react';

interface Props {
  clockName: string;
}

interface State {
  currentDate: Date;
}

export class Clock extends React.Component<Props, State> {
  state: State = {
    currentDate: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({
        currentDate: new Date(),
      });

      // eslint-disable-next-line no-console
      console.info(this.correctData(this.state.currentDate));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  correctData = (date: Date) => {
    return date.toUTCString().slice(-12, -4);
  };

  render() {
    const { clockName } = this.props;
    const { currentDate } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.correctData(currentDate)}
        </span>
      </div>
    );
  }
}
