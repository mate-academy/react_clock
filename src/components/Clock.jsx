import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
    intervalId: null,
  };

  componentDidMount() {
    this.setState({
      intervalId: setInterval(() => {
        this.updateTime();
      }, 1000),
    });
  }

  componentDidUpdate(props, state) {
    const { name } = this.props;
    const { time } = this.state;

    // eslint-disable-next-line
    console.log(time);

    if (name !== props.name) {
      // eslint-disable-next-line
      console.log(`The clock was renamed from ${props.name} to ${name}`);
    }
  }

  componentWillUnmount() {
    const { intervalId } = this.state;

    clearInterval(intervalId);
  }

  updateTime = () => {
    const time = new Date().toLocaleTimeString();

    this.setState({ time });
  }

  render() {
    const { time } = this.state;
    const { visible } = this.props;

    return (
      <>
        { visible
          && (
          <span>
            {time}
          </span>
          )
        }
      </>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.string,
  visible: PropTypes.bool,
};

Clock.defaultProps = {
  name: '',
  visible: false,
};
