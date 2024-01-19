import React from 'react';
import './App.scss';
import { Clock } from './Clock';

interface State {
  hasClock: boolean;
  clockName: string;
}

export class App extends React.PureComponent {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu',
      (event) => {
        event.preventDefault();
        this.setState({ hasClock: false });
      });

    document.addEventListener('click',
      () => this.setState({ hasClock: true }));
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <Clock
            name={this.state.clockName}
            callback={(value) => this.setState({ clockName: value })}
          />
        )}

      </div>
    );
  }
}
