import React from 'react';

type State = {
  today: Date,
};

type Props = {
  name: string,
};

export class Clock extends React.Component <Props, State> {
  state = {
    today: new Date(),
  };

  timeDate = 0;

  componentDidMount() {
    this.timeDate = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);

    // eslint-disable-next-line no-console
    console.info(this.state);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timeDate);
  }

  render() {
    const { today } = this.state;

    const { name } = this.props;

    const timeString = today.toUTCString().slice(-12, -4);

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {timeString}
        </span>
      </div>
    );
  }
}
