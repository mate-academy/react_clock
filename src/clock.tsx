import React from 'react';

import './App.scss';

type Props = {
  name: string,
};

type State = {
  date: Date,
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.info(this.state.date.toLocaleTimeString());

      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate(prev: Props) {
    if (prev.name !== this.props.name) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${prev.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const {
      date,
    } = this.state;

    const {
      name,
    } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>
        {' time is '}
        <span className="Clock__time">
          {date.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
