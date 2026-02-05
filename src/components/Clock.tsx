import React from 'react';

type ClockProps = {
  name: string;
};

type Props = {
  today: Date;
};

export default class App extends React.Component<ClockProps, Props> {
  private timerId?: number;

  state = {
    today: new Date(),
  };

  getCurrentTime = () => {
    this.setState({
      today: new Date(),
    });
    // eslint-disable-next-line no-console
    console.log(new Date());
  };

  componentDidMount() {
    this.timerId = window.setInterval(this.getCurrentTime, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  componentDidUpdate(prevProps: ClockProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    const { name } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
