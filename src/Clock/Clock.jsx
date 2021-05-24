import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.idInterval = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
      console.log(this.state.date);
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    const { name } = this.props;

    if (name !== prevProps.name) {
      console.log(`Clock Name was changed from `
        + `${prevProps.name} to ${name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.idInterval);
  }

  render() {
    return (
      <>
        {this.state.date}
      </>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
