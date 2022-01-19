import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { uniqueNamesGenerator, Config, colors } from 'unique-names-generator';

import { Clock } from './components/Clock';
import './App.scss';

type State = {
  isClockVisible: boolean;
  clockName: string;
};

const config: Config = {
  dictionaries: [colors],
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    clockName: '',
  };

  showClockHandler = () => {
    this.setState(prevState => ({
      isClockVisible: !prevState.isClockVisible,
    }));
  };

  randomNameClickHadler = () => {
    this.setState({
      clockName: uniqueNamesGenerator(config),
    });
  };

  render() {
    return (
      <Card className="card">
        <Card.Body>
          <Button
            className="btn btn-primary"
            type="button"
            onClick={() => this.showClockHandler()}
          >
            {this.state.isClockVisible ? 'Hide Clock' : 'Show Clock'}
          </Button>
          <Button
            className="btn btn-secondary"
            type="button"
            onClick={() => this.randomNameClickHadler()}
          >
            Set random name
          </Button>

          {this.state.isClockVisible
            ? <Clock title={this.state.clockName} />
            : (
              <Card.Title
                className="title"
              >
                Click button above if you need to know correct time
              </Card.Title>
            )}
        </Card.Body>
      </Card>
    );
  }
}

export default App;
