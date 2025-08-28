import React from 'react';
// import {clearInterval} from 'timers';

type Props = {
  name: string; // Clock буде отримувати ім'я годинника від App
};

type State = {
  time: string;
};

export class Clock extends React.Component<Props, State> {
  private timerId?: number;

  state: State = {
    time: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.log('Clock tick:', new Date().toLocaleTimeString());

      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}
