/* eslint-disable no-console */
import React from 'react';

type Props = {
  name: number,
};

export class Clock extends React.Component<Props, {}> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => (
      this.setState({ date: new Date() })), 1000);

    console.log('Start');
  }

  componentDidUpdate(prevProps: Props) {
    const prevName = prevProps.name;
    const newName = this.props.name;

    if (prevProps.name !== this.props.name) {
      console.log(`Renamed from ${prevName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    console.log('Stopped');
  }

  render(): React.ReactNode {
    const { date } = this.state;
    const { name } = this.props;
    const localeTime = date.toLocaleTimeString();

    console.log(localeTime);

    return (
      <div className="Clock__container">
        <h1 className="Clock__name">
          {`Clock name ${name}`}
        </h1>
        <h2 className="Clock__time">{localeTime}</h2>
      </div>
    );
  }
}
