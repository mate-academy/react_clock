import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
    state = { date: new Date() }

    componentDidMount() {
      this.timerID = setInterval(
        this.setState({
          date: new Date(),
        }),
        1000,
      );
    }

    componentDidUpdate(prevProps) {
      if (prevProps.name !== this.props.name) {
        // eslint-disable-next-line
        console.log(`The Clock was renamed from oldName to newName`);
      }
    }

    componentWillUnmount() {
      clearInterval(
        this.timerID,
      );
    }

    render() {
      const { name } = this.props;

      return (
        <>
          <h1>
            React clock
            {name}
          </h1>
          <p>
            Current time:
            {' '}
            {this.state.date.toLocaleTimeString()}
          </p>
        </>
      );
    }
}

Clock.propTypes = {
  name: PropTypes.number,
};

Clock.defaultProps = {
  name: null,
};

export default Clock;
