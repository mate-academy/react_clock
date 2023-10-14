import React from 'react';
import './App.scss';
import { Clock } from './Class';

export class App extends React.Component {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleDocumentRightClick);
    document.addEventListener('click', this.handleDocumentLeftClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleDocumentRightClick);
    document.removeEventListener('click', this.handleDocumentLeftClick);
  }

  handleDocumentRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleDocumentLeftClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
