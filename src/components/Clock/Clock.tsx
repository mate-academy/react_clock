import React from 'react';

type Props = {
  clockName: string
};

export class Clock extends React.Component<Props> {
  state = {
    today: new Date(),
    timerId: 0,
  };

  componentDidMount() {
    this.setState({
      timerId: window.setInterval(() => {
        const newDate = new Date();

        this.setState({ today: newDate });

        // eslint-disable-next-line no-console
        console.info(newDate.toUTCString().slice(-12, -4));
      }, 1000),
    });
  }

  componentWillUnmount() {
    window.clearInterval(this.state.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
