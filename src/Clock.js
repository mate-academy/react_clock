import React from 'react';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.timer();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  timer = () => {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  };

  render() {
    const { date } = this.state;
    // eslint-disable-next-line react/prop-types
    const { name } = this.props;

    return (
      <p>
        Current time:
        {' '}
        <span>{date.toLocaleTimeString()}</span>
        <p>
          {`The Clock was renamed from oldName to ${name}`}
        </p>
        {/* eslint-disable-next-line no-console */}
        {console.log(
          `The Clock was renamed from oldName to ${name}`,
        )}
        {/* eslint-disable-next-line no-console */}
        {console.log(date.toLocaleTimeString())}
      </p>
    );
  }
}
