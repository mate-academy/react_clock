import React from 'react';
import PropTypes from 'prop-types';

import './App.scss';

class Clock extends React.Component {
  timer = null;

  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const date = new Date();

      this.setState({
        date: date.toLocaleTimeString(),
      });

      console.log(this.state.date);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <>
        {this.props.name && (
          <h4>
            Clock name is
            {this.props.name}
          </h4>
        )}
        <p>
          Current time:
          {` ${this.state.date}`}
        </p>
      </>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Clock;
