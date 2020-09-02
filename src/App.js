import React from 'react';

import './App.scss';

class App extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  render() {
    setTimeout(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
    }, 1000);

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
