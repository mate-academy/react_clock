/* eslint-disable no-console */
import { Component } from 'react';

type Props = {
  name: string;
  today: string;
};

export class Clock extends Component<Props, {}> {
  componentDidUpdate(prevProps: Props) {
    const { name, today } = this.props;

    if (today !== prevProps.today) {
      console.info(today);
    }

    if (name !== prevProps.name) {
      console.debug(`Renamed from ${prevProps.name} to ${name}`);
    }
  }

  render() {
    const { name, today } = this.props;

    return (
      <div className="App">
        <h1>React clock</h1>

        <div className="Clock">
          <strong className="Clock__name">
            {name}
          </strong>

          {' time is '}

          <span className="Clock__time">
            {today}
          </span>
        </div>
      </div>
    );
  }
}
