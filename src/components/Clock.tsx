import React from 'react';
import './Clock.scss';

type Props = {
  name: string | null;
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

    if (newName !== prevProps.name) {
      // eslint-disable-next-line
      console.log(
        `The clock was renamed from ${prevProps.name} to ${newName}`,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    // eslint-disable-next-line
    console.log(this.state.date.toLocaleTimeString());

    return (
      <>
        {this.props.name && (
          <h2>
            {`"${this.props.name}"`}
          </h2>
        )}

        <div className="clock">
          <p>
            Current time:
          </p>

          {this.state.date.toLocaleTimeString()}
        </div>
      </>
    );
  }
}
