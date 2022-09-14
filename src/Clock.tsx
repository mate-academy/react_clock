import { Component } from 'react';
import './App.scss';

type Props = {
  name: string;
};

type State = {
  date: Date;
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const date = new Date();

      // eslint-disable-next-line no-console
      console.info(date.toLocaleTimeString());

      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name: newName } = this.props;
    const { name: oldName } = prevProps;

    if (newName !== oldName) {
      // eslint-disable-next-line no-console
      console.info(`Rename from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;
    const { name } = this.props;

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
