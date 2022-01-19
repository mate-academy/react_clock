import React from 'react';
import { Card } from 'react-bootstrap';

type Props = {
  title: string;
};

type State = {
  date: Date;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    date: new Date(),
  };

  timerId?: NodeJS.Timeout;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tic();
      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.title !== this.props.title) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.title} to ${this.props.title}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  tic = () => {
    this.setState({
      date: new Date(),
    });
  };

  render() {
    return (
      <>
        <Card.Title>
          {this.props.title
            ? `${this.props.title} clock`
            : 'Outstanding Clock)))'}
        </Card.Title>
        <Card.Subtitle>
          <em>
            Current time:
          </em>
          {' '}
          <strong style={{ color: this.props.title }}>
            {this.state.date.toLocaleTimeString()}
          </strong>
        </Card.Subtitle>
      </>
    );
  }
}
