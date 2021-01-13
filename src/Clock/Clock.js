import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    setInterval(this.timer, 1000);
    this.mounted = true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.name !== prevProps.name) {
      /* eslint-disable-next-line no-console */
      console.log('The Clock was renamed from oldName to newName');
    }

    if (this.state.date !== prevState.date) {
      /* eslint-disable-next-line no-console */
      console.log(this.state.date.toLocaleTimeString());
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.mounted = false;
  }

  timer = () => {
    this.setState({
      date: new Date(),
    });
  };

  render() {
    return (
      <div>
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
