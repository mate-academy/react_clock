import React from 'react';
import PropTypes from 'prop-types';
import './Clock.scss';

class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
      // eslint-disable-next-line no-console
      console.log(new Date().toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { date } = this.state;
    const { name } = this.props;

    return (
      <div className="clock clock__watch">
        Current time:
        <p className="clock__time">{date}</p>
        {name === '00:00:00'
          ? ''
          : (
            <div className="clock__title">
              The Clock was renamed from oldName to:
              <p className="clock__text">{`${name}`}</p>
            </div>
          )
        }
      </div>
    );

  }
}

Clock.defaultProps = {
  name: '00:00:00',
};

Clock.propTypes = {
  name: PropTypes.string,
};

export default Clock;
