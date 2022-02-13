/* eslint-disable no-console */
import React from 'react';
import { User } from '../../types';

type ClockProps = {
  shouldChangeName: boolean;
};

type ClockStates = {
  date: string;
  user: User | undefined;
};

export class Clock extends React.Component<ClockProps, ClockStates> {
  state: {
    date: string,
    user: User | undefined,
  } = {
    date: (new Date()).toLocaleTimeString(),
    user: undefined,
  };

  timerId: NodeJS.Timeout = setInterval(() => {
    this.setState({ date: (new Date()).toLocaleTimeString() });
    console.log(this.state.date);
  }, 1000);

  componentDidMount() {
    this.getUser();

    return this.timerId;
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  getUser = async (): Promise<any> => {
    await fetch('https://randomuser.me/api')
      .then((resp) => resp.json())
      .then((resp) => {
        this.setState({
          user: resp.results[0],
        });
      });
  };

  render(): React.ReactNode {
    let userFullName = 'Loading...';

    if (this.state.user) {
      const { title, first, last } = this.state.user.name;

      userFullName = `${title}. ${first} ${last}`;
    }

    return (
      <>
        <span>
          {this.state.date}
        </span>
        <br />
        <span>
          { userFullName }
        </span>
      </>
    );
  }
}
