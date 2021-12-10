import React from 'react';
// eslint-disable-next-line
import { names } from '../App';

type State = {
  currentTime: string | null;
};

type Props = {
  nameId: number;
};

export class Clock extends React.Component<Props, State> {
  timerId: NodeJS.Timer | null = null;

  state = {
    currentTime: null,
  };

  componentDidMount() {
    this.setState({ currentTime: new Date().toLocaleTimeString() });

    this.timerId = setInterval(() => {
      this.setState({ currentTime: new Date().toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(this.state.currentTime);
    }, 1000);
  }

  componentDidUpdate({ nameId: prevNameId }: Props) {
    const { nameId } = this.props;

    if (prevNameId !== nameId) {
      // eslint-disable-next-line
      console.log(`${names[prevNameId]} was renamed to ${names[nameId]}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <>
        {this.state.currentTime}
      </>
    );
  }
}
