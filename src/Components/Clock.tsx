import React from 'react';

type State = {
  date: Date,
};

type Props = {
  name: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  timer = 0;

  componentDidMount() {
    this.timer = window.setInterval(this.runInterval, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    /* eslint-disable no-console */
    console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  runInterval = () => {
    const date = new Date();

    this.setState({ date });
    /* eslint-disable no-console */
    console.info(date.toUTCString().slice(-12, -4));
  };

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>
        {' time is '}
        <span className="Clock__time">
          {this.state.date.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
