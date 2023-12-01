import React from 'react';

interface State {
  today: Date;
  timerId: number;
}

interface Props {
  name: string;
}

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
    timerId: 0,
  };

  componentDidMount() {
    this.setState({
      timerId: window.setInterval(() => {
        const currentDate = new Date();

        this.setState({
          today: currentDate,
        });

        // eslint-disable-next-line no-console
        console.info(currentDate.toUTCString().slice(-12, -4));
      }, 1000),
    });
  }

  componentWillUnmount() {
    window.clearInterval(this.state.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
