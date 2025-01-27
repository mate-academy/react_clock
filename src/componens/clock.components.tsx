import React from 'react';
import { text } from './constants/text';

type Props = {
  clockName: string;
  handleClockName: () => void;
};

type State = {
  today: string;
};

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  timeId = 0;

  handleUTC = () => {
    this.setState({ today: new Date().toUTCString().slice(-12, -4) }, () => {
      // eslint-disable-next-line
      console.log(this.state.today);
    });
  };

  componentDidMount() {
    this.props.handleClockName();
    this.timeId = window.setInterval(this.handleUTC, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timeId);
  }

  render() {
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>
        {text.timeIs}
        <span className="Clock__time">{this.state.today}</span>
      </div>
    );
  }
}
