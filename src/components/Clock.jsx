import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString('en-GB'),
  }

  componentDidMount() {
    this.setState({
      timer: setInterval(() => {
        this.setState({ time: new Date().toLocaleTimeString('en-GB') });
        //  eslint-disable-next-line
        console.log(this.state.time);
      }, 1000),
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      //  eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`)
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  render() {
    const { time } = this.state;

    return (
      <span>
        {time}
      </span>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.string,
};

Clock.defaultProps = {
  name: null,
};
