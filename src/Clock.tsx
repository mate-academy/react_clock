import React from 'react';

type State = {
  today: Date;
};

type Props = {
  name: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  updateTime = () => {
    const currentTime = new Date();

    this.setState({
      today: currentTime,
    });
    // eslint-disable-next-line no-console
    console.log(currentTime.toUTCString().slice(-12, -4));
  };

  componentDidMount() {
    this.timerId = window.setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { today } = this.state;
    const { name } = this.props;

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
