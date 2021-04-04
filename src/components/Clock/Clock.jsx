import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from `
        + `${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { date } = this.state;
    const { name } = this.props;

    const style = {
      strong: {
        fontSize: '25px',
        color: 'red',
      },
    };

    return (
      <>
        Current time:
        {' '}
        {date.toLocaleTimeString()}
        {' '}
        <strong className="random" style={style.strong}>{name}</strong>
      </>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
