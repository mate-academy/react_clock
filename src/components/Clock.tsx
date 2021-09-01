import React from 'react';
import './Clock.scss';

type Props = {
  name?: string;
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
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line
      console.log(this.props.name);
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
