import React from 'react';

import './App.scss';

class App extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  render() {
    return (
      <div className="box">
        <div className="box__time">
          {this.state.date}
        </div>
      </div>
    );
  }
}

export default App;
