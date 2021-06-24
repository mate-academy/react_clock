/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
    heyWhatTimeIsIt: null,
  };

  static propTypes = {
    name: PropTypes.number.isRequired,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString();

      this.setState({
        time: currentTime,
      });

      console.log(currentTime);
    }, 1000);

    this.setState({
      heyWhatTimeIsIt: this.interval,
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.name !== prevProps.name) {
      console.log(`The Clock was renamed from `
        + `${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    const { heyWhatTimeIsIt } = this.state;

    clearInterval(heyWhatTimeIsIt);
  }

  render() {
    return (
      <>
        {this.state.time}
      </>
    );
  }
}
