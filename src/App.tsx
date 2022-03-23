import './App.scss';

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Randomizer } from './addons/Randomizer';
import { Clock } from './components/Clock';

type State = {
  clockName: string;
  isClockVisible: boolean;
};

export class App extends React.Component<{}, State> {
  state = {
    clockName: Randomizer.getRandomName(),
    isClockVisible: true,
  };

  showClock = () => (
    this.setState({ isClockVisible: true })
  );

  hideClock = () => (
    this.setState({ isClockVisible: false })
  );

  renameClock = () => (
    this.setState({ clockName: Randomizer.getRandomName() })
  );

  render() {
    return (
      <div className="App d-flex">
        <div className="App__controller me-5">
          <Button
            className="App__controller-button d-block"
            variant="primary"
            onClick={this.showClock}
          >
            Show
          </Button>

          <Button
            className="App__controller-button d-block"
            variant="primary"
            onClick={this.hideClock}
          >
            Hide
          </Button>

          <Button
            className="App__controller-button d-block"
            variant="primary"
            onClick={this.renameClock}
          >
            Rename
          </Button>
        </div>

        {this.state.isClockVisible
          && (
            <div
              className="App__clock d-flex justify-content-center"
            >
              <Card
                className="App__clock-frame d-flex justify-content-center"
              >
                <Clock clockName={this.state.clockName} />

                <h1
                  className="
                    App__clock-manufacturer
                    d-flex
                    justify-content-center
                  "
                >
                  {this.state.clockName}
                </h1>
              </Card>
            </div>
          )}
      </div>
    );
  }
}
