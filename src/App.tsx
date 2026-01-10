import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}
type Props = {};
type State = {
  hasClock: boolean;
  clockName: string;
}
export class App extends React.Component<Props, State> {
  nameTimerId: number | null = null;
  state: State = {
    hasClock: true,
    clockName: 'Clock-0'
  }
  handleClickDocument = () => {
    this.setState({hasClock: true})
  };
  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({hasClock: false})
  }
  componentDidMount(): void {
    document.addEventListener('click', this.handleClickDocument);
    document.addEventListener('contextmenu', this.handleContextMenu )
    this.nameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName()});
    }, 3300)
  };
  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleClickDocument)
    document.removeEventListener('contextmenu', this.handleContextMenu)

    if (this.nameTimerId !== null) {
      window.clearInterval(this.nameTimerId);
    }
  }
  render() {
    const {hasClock, clockName} = this.state
    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && (
          <Clock name={clockName}/>
        )}
      </div>
    )
  }
}
