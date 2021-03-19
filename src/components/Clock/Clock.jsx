import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.time = setInterval(() => {
      this.setState({
        date: new Date(),
      });

      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(oldProps) {
    if (oldProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${oldProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.time);
  }

  render() {
    const { date } = this.state;
    const time = date.toLocaleTimeString();

    return (
      <strong>
        {time}
      </strong>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.string.isRequired,
};
