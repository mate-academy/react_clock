import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date(),
    name: 1,
  }

  componentDidMount() {
    setInterval(() => {
      if (this.props.isHidden) {
        return;
      }

      this.setState({ date: new Date() });
      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.props.name) {
      this.state.name = this.props.name;
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.state.name}`)
    }
  }

  render() {
    return this.props.isHidden ? null : (
      <div className="clock">
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

Clock.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  name: PropTypes.number.isRequired,
};
