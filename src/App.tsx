import { Component } from 'react';
// import { render } from 'react-dom';
import './App.scss';
import { Clock } from './Clock';

interface State {
  hasClock: boolean;
  name: string;
}

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    name: 'Clock-0',
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleRihgtClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleRihgtClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  handleRihgtClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.name} />}
      </div>
    );
  }
}
