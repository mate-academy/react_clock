/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

interface State {
  clockDate: Date;
}

interface Props {
  name: string;
}

export class Clock extends React.Component<Props> {
  clockTimerId = 0;

  state: Readonly<State> = {
    clockDate: new Date(),
  };

  componentDidMount() {
    this.clockTimerId = window.setInterval(() => {
      this.setState({ clockDate: new Date() });
      console.info(this.state.clockDate.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.name !== this.props.name) {
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.clockTimerId);
  }

  render(): React.ReactNode {
    const { clockDate } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {clockDate.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
