import React from 'react';

type Props = {
  name: string;
};

type State = {
  date: string,
};

export class Clock extends React.PureComponent<Props, State> {
  state = {
    date: (new Date()).toLocaleTimeString(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      let { date } = this.state;

      date = (new Date()).toLocaleTimeString();

      this.setState({ date });

      // eslint-disable-next-line no-console
      console.log(date);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;
    const { name } = this.props;

    return (
      <div className="clock">
        <strong>{name}</strong>
        {' time is '}
        {date}
      </div>
    );
  }
}
