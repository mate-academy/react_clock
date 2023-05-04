import { Component } from 'react';
import './App.scss';

import { Card, Icon, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import { Clock } from './components/Clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);

    document.addEventListener('click', this.handleClick);
    document.addEventListener('contextmenu', this.handleContextMenu);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);

    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('contextmenu', this.handleContextMenu);
  }

  handleClick = () => {
    this.setState({
      hasClock: true,
    });
  };

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault(); // not to show the context menu
    this.setState({
      hasClock: false,
    });
  };

  render() {
    const { hasClock, clockName } = this.state;
    const today = new Date();
    const dateISO = today.toISOString().slice(0, 10);
    const dateLocaleString = today.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    return (
      <div className="container">
        <Card centered className="App">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/4305/4305432.png"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>React clock</Card.Header>
            <Card.Meta>
              <span className="date">react clock</span>
            </Card.Meta>
            <Card.Description>
              {hasClock && <Clock clockName={clockName} />}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="clock" />
            <time dateTime={dateISO} data-cy="date">
              {dateLocaleString}
            </time>
          </Card.Content>
        </Card>
      </div>
    );
  }
}
