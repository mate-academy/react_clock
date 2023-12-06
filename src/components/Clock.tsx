/* eslint-disable react/prefer-stateless-function */
import React from 'react';

type Props = {
  name: string;
  hasClock: boolean;
};

type State = {
  today: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
  };

  timeInterval = 0;

  componentDidMount() {
    this.timeInterval = window.setInterval(this.timeId, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timeInterval);
  }

  timeId = () => {
    this.setState({ today: new Date() });

    // eslint-disable-next-line no-console
    console.info(this.state.today.toUTCString().slice(-12, -4));
  };

  render() {
    const { name } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
