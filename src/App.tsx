import React from 'react';
import './App.scss';
import Clock from './components/Clock';

// eslint-disable-next-line
class App extends React.Component {
  state = {
    hideShow: true,
    name: ['coll', 'my', 'home', 'bad', 'like', 'rolex', 'cina', 'goods', 'floor', 'hight'],
    i: 0,
  };

  show = () => {
    this.setState({ hideShow: true });
  };

  hide = () => {
    this.setState({ hideShow: false });
  };

  random = () => {
    const was = this.state.i;
    const will = Math.floor(Math.random() * 10);

    this.setState({ i: will });
    // eslint-disable-next-line
    console.log(`The Clock was renamed from ${this.state.name[was]} to ${this.state.name[will]} (componentDidUpdate)`)
  };

  render() {
    return (
      <div className="App">
        <h1 className="clock">
          React clock
          {' '}
          <div className="name">
            {this.state.name[this.state.i]}
          </div>
        </h1>
        <button type="button" onClick={this.show}>Show Clock</button>
        <button type="button" onClick={this.hide}>Hide Clock</button>
        <button type="button" onClick={this.random}>Set random name</button>
        {this.state.hideShow && <Clock />}
      </div>
    );
  }
}

export default App;
