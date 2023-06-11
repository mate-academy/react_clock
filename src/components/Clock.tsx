import React from 'react';

type State = {
  today: string,
};

type Props = {
  name: string,
};

export class Clock extends React.Component <Props, State> {
  state = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  timeDate = 0;

  componentDidMount() {
    this.timeDate = window.setInterval(() => {
      this.setState({
        today: new Date().toUTCString().slice(-12, -4),
      });
      // eslint-disable-next-line no-console
      console.info(this.state.today);
    }, 1000);
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

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>
        <span> time is </span>
        <span className="Clock__time">
          {today}
        </span>
      </div>
    );
  }
}
