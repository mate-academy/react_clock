import React from 'react';
import propTypes from 'prop-types';

class Clock extends React.Component {
    state = {
      currentTime: new Date().toLocaleTimeString(),
    };

    componentDidMount() {
      setInterval(() => {
        const date = new Date().toLocaleTimeString();

        this.setState({ currentTime: date });
      }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
      const { name } = this.props;

      if (prevProps.name !== name) {
        // eslint-disable-next-line
        console.log(`The Clock was renamed from ${prevProps.name} to ${name}`);
      }
    }

    render() {
      const { currentTime } = this.state;
      // eslint-disable-next-line
        console.log(currentTime);

      return <span>{` ${currentTime}`}</span>;
    }
}

Clock.propTypes = {
  name: propTypes.string.isRequired,
};

export default Clock;
