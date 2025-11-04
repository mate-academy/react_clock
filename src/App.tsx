import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type AppState = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, AppState> {
  private nameTimerId: number | null = null;

  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  constructor(props: {}) {
    super(props);

    this.onDocumentClick = this.onDocumentClick.bind(this);
    this.onDocumentContextMenu = this.onDocumentContextMenu.bind(this);
  }

  componentDidMount() {
    // update the clockName every 3300ms
    this.nameTimerId = window.setInterval(() => {
      const newName = getRandomName();

      this.setState({ clockName: newName });
    }, 3300);

    // show clock on left click
    document.addEventListener('click', this.onDocumentClick);

    // hide clock and prevent context menu on right click
    document.addEventListener('contextmenu', this.onDocumentContextMenu);
  }

  componentWillUnmount() {
    if (this.nameTimerId != null) {
      window.clearInterval(this.nameTimerId);
      this.nameTimerId = null;
    }

    document.removeEventListener('click', this.onDocumentClick);
    document.removeEventListener('contextmenu', this.onDocumentContextMenu);
  }

  onDocumentClick() {
    // left click should show the clock
    this.setState({ hasClock: true });
  }

  onDocumentContextMenu(event: MouseEvent) {
    // right click should hide the clock and prevent default menu
    event.preventDefault();
    this.setState({ hasClock: false });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <div className="Clock">
            <strong className="Clock__name">{this.state.clockName}</strong>

            {' time is '}

            <Clock name={this.state.clockName} />
          </div>
        )}
      </div>
    );
  }
}
