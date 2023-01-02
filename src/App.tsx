import React from 'react';
import './App.scss';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import { Clock } from './components/Clock';
import photo from './London.jpg';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  namingId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.hendleLeftClick);
    document.addEventListener('click', this.hendleRightClick);

    this.namingId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.hendleLeftClick);
    document.removeEventListener('click', this.hendleRightClick);

    window.clearInterval(this.namingId);
  }

  hendleLeftClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  hendleRightClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const {
      hasClock,
      clockName,
    } = this.state;

    return (
      <Container fixed>
        <Card style={{ color: '#004d40', padding: '10px' }}>
          <h1>React clock</h1>
          <CardMedia
            component="img"
            height="300"
            image={photo}
            alt="London panorama"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              color="#f57c00"
            >
              London, UK
            </Typography>

            {hasClock && (
              <Clock clockName={clockName} />
            )}

          </CardContent>

          <CardActionArea sx={{ padding: 1 }}>
            <Link
              target="_blank"
              rel="noopener"
              href="https://en.wikipedia.org/wiki/Greenwich_Mean_Time"
              underline="none"
              color="#4db6ac"
              fontSize="20px"
            >
              Read more about GMT
            </Link>

          </CardActionArea>
        </Card>
      </Container>
    );
  }
}
