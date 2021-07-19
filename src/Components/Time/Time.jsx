import React from 'react';
import PropTypes from 'prop-types';

class Time extends React.Component {
    state={
      name: 0,
    }

    render() {
      const changeName = () => {
        if (this.props.isVisible) {
          const randomName = (Math.random() * 100000).toFixed(0);

          this.setState({ name: randomName });
          // eslint-disable-next-line
          console.log(`The Clock was renamed from ${this.state.name} to ${randomName}`);
        }
      };

      return (
        <>
          <button
            className="App__button"
            type="button"
            onClick={changeName}
          >
            Change name
          </button>
        </>
      );
    }
}

Time.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default Time;
