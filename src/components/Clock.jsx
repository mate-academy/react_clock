import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    clock: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.setState({
      time: setInterval(() => {
        this.setState({ clock: new Date().toLocaleTimeString() });
        //  eslint-disable-next-line
        console.log(this.state.clock);
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
    clearInterval(this.state.time);
  }

  render() {
    const { clock } = this.state;

    return (<span>{clock}</span>);
  }
}

Clock.defaultProps = {
  name: null,
};

Clock.propTypes = {
  name: PropTypes.string,
};
