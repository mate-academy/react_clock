import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.time = setInterval(() => {
      this.setState({
        date: new Date(),
      });
      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(
        `The Clock was renamed from ${prevProps.name} to ${this.props.name}`,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  render() {
    return (
      <>
        <p>
          Current time:
        </p>
        <h1>
          <i>
            {this.state.date.toLocaleTimeString()}
          </i>
        </h1>
      </>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
