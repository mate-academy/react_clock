import React from 'react';
import { getRandomName, Clock } from './components/Clock';
import './App.scss';

type Props = {};

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends React.Component<Props, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount() {
    document.addEventListener('contextmenu', (event) => {
      this.handleContextMenu(event);
    });
    document.addEventListener('click', this.handleClick);
  }

  handleClick = () => (this.setState({ hasClock: true }));

  handleContextMenu = (event: Event) => {
    event.preventDefault();
    this.setState({ hasClock: false, clockName: getRandomName() });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && (
          <Clock clockName={this.state.clockName} />
        )}
      </div>
    );
  }
}
