import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
    interval: null,
  }

  static propTypes = {
    name: PropTypes.string,
  }

  static defaultProps = {
    name: '',
  }

  componentDidMount() {
    const interval = setInterval(() => {
      const date = new Date().toLocaleTimeString();

      // eslint-disable-next-line no-console
      console.log(date);
      this.setState({
        date, interval,
      });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevProps.name
      } to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <div>{`Current time (${this.props.name}): ${this.state.date}`}</div>
    );
  }
}
