import { Component } from 'react';

type Props = {
  name: string,
};

type State = {
  date: Date,
};

export class Clock extends Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerDate = 0;

  componentDidMount() {
    this.timerDate = window.setInterval(() => {
      const date = new Date();

      this.setState({ date });
      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name } = this.props;

    return (name !== prevProps.name
    // eslint-disable-next-line
      && console.log(`Old name: ${prevProps.name} | New name: ${name}`)
    );
  }

  componentWillUnmount() {
    window.clearInterval(this.timerDate);
  }

  render() {
    const { name } = this.props;
    const { date } = this.state;

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
