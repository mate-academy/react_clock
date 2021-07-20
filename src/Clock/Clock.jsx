import React from 'react';
import propTypes from 'prop-types';

class Clock extends React.Component {
    state = {
      currentTime: new Date().toLocaleTimeString(),
    };

    componentDidMount() {
        this.interval = setInterval(this.info, 1000)
    }

    componentDidUpdate(prevProps, prevState) {
      const { name } = this.props;

      if (prevProps.name !== name) {
        // eslint-disable-next-line
        console.log(`The Clock was renamed from ${prevProps.name} to ${name}`);
      }
    }

    componentWillUnmount () {
        clearInterval(this.interval);
    }

    info = () => {
        this.setState({
            currentTime: new Date().toLocaleTimeString() 
        });
        // eslint-disable-next-line
        console.log(this.state.currentTime);
    }

    render() {
      const { currentTime } = this.state;
      return <span>{` ${currentTime}`}</span>;
    }
}

Clock.propTypes = {
  name: propTypes.string.isRequired,
};

export default Clock;
