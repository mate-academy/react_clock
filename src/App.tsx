import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

type State = {
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
  };

  componentDidMount(): void {
    document.addEventListener('click', this.handleDocumentClick);
    document.addEventListener('contextmenu', this.handleDocumentClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleDocumentClick);
    document.removeEventListener('contextmenu', this.handleDocumentClick);
  }

  handleDocumentClick = (elem: MouseEvent) => {
    elem.preventDefault();

    if (elem.button === 0) {
      this.setState({ hasClock: true });
    } else if (elem.button === 2) {
      this.setState({ hasClock: false });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <Clock status={this.state.hasClock} />
      </div>
    );
  }
}
