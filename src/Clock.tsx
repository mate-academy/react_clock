import React from 'react';

interface State {
  date: Date;
}

interface Props {
  name: string;
}

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const date = new Date();

      this.setState({ date });
      // eslint-disable-next-line no-console
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prev: Props) {
    const { name } = this.props;

    if (prev.name !== name) {
      // eslint-disable-next-line no-console
      console.log(
        `Renamed from ${prev.name} to ${name}`,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
