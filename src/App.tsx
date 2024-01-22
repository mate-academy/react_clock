import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  hasClock: boolean;
  name: string;
}

export class App extends React.PureComponent {
  state: State = {
    hasClock: true,
    name: 'Clock-0',
  }
  
  timerId = 0;
  
  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ name: getRandomName() }); 
    }, 3300);

    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);
  }

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  render() {

    return (
      <div className="App">
        <h1>React clock</h1>
  
        {this.state.hasClock && (
          <Clock name={this.state.name}/>
        )}
      </div>
    );
  }
}
