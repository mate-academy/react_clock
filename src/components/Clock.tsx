import React from 'react';
import './Clock.scss';

type Props = {
  name: string;
};

type State = {
  date: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  interval = setInterval(() => {
    this.setState({ date: new Date() });
  }, 1000);

  componentDidMount() {
    return this.interval;
  }

  componentDidUpdate(prevProps: Props) {
    const { name: newName } = this.props;
    const { name: oldName } = prevProps;

    if (newName !== oldName) {
      // eslint-disable-next-line
      console.log(
        `The clock was renamed from ${oldName} to ${newName}`,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { date } = this.state;
    const { name } = this.props;
    // eslint-disable-next-line
    console.log(date.toLocaleTimeString());

    return (
      <>
        {name && (
          <h2>
            {`"${name}"`}
          </h2>
        )}

        <div className="clock">
          <p>
            Current time:
          </p>

          {date.toLocaleTimeString()}
        </div>
      </>
    );
  }
}
