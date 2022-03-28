import React from 'react';
import { Clock } from './components/Clock';

type State = {
  name: number,
  visible: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    name: 0,
    visible: true,
  };

  show = () => {
    this.setState({
      visible: true,
    });
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  generate = () => {
    const generateName = Math.ceil(Math.random() * 1000);

    this.setState({
      name: generateName,
    });
  };

  render() {
    return (
      <>
        <button type="button" onClick={this.hide}>
          Hide Clock
        </button>
        <button type="button" onClick={this.show}>
          Show Clock
        </button>
        <button type="button" onClick={this.generate}>
          Generete name
        </button>
        <h3>
          {this.state.visible && <Clock name={this.state.name} />}
        </h3>
      </>
    );
  }
}
