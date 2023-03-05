import  { Component } from "react";
import { Clock } from "./components";
import "./App.scss";

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type AppState = {
  hasClock: boolean;
  clockName: string;
};

export class App extends Component<{}, AppState> {
  state: Readonly<AppState> = {
    hasClock: true,
    clockName: "Clock-0",
  };

  handleNameUpdate = 0;

  componentDidMount(): void {
    this.handleNameUpdate = window.setInterval(() => {
      this.setState({clockName: getRandomName()})
    }, 3300);

    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      this.setState({ hasClock: false });
    }),

    document.addEventListener("click", () => {
      this.setState({ hasClock: true });
    });
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock &&
          <Clock clockName={clockName} />
        }
      </div>
    );
  }
}

