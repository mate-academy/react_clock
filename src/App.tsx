import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

export class App extends Component {
  state = {
    isHidden: true,
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleContextMenu);

    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
  }

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ isHidden: false });
  };

  handleClick = () => {
    this.setState({ isHidden: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.isHidden && (
          <Clock />
        )}
      </div>
    );
  }
}
