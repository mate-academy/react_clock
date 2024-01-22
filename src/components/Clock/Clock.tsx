/* eslint-disable no-console */
import React from 'react';

type State = {
  today: Date
};

type Props = {
  name: string,
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
  };

  clockNameTimerId = 0;

  dateTimerId = 0;

  componentDidMount(): void {
    this.onAppearing();
  }

  componentWillUnmount(): void {
    this.onDisappearing();
  }

  onAppearing() {
    this.dateTimerId = window.setInterval(() => {
      this.setState({ today: new Date() });

      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  onDisappearing() {
    window.clearInterval(this.dateTimerId);
  }

  render() {
    const { today } = this.state;
    const { name } = this.props;

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
