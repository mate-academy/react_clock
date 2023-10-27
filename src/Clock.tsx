import React from 'react';
import './App.scss';

// function getRandomName(): string {
//   const value = Date.now().toString().slice(-4);
//
//   return `Clock-${value}`;
// }

type Props = {
  name: string,
};

type State = {
  today: Date,
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    const { name } = this.props;
    const { today } = this.state;

    // eslint-disable-next-line no-console
    console.info(today.toUTCString().slice(-12, -4));

    if (prevProps.name !== name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
