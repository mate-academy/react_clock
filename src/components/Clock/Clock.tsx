/* eslint-disable no-console */
import React from 'react';
import { User } from '../../types';

type Props = {
  user: User | undefined;
};

type States = {
  date: string;
};

export class Clock extends React.Component<Props, States> {
  state = {
    date: (new Date()).toLocaleTimeString(),
  };

  timerId: NodeJS.Timeout = setInterval(() => {
    this.setState({ date: (new Date()).toLocaleTimeString() });
    console.log(this.state.date);
  }, 1000);

  componentDidMount() {
    return this.timerId;
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render(): React.ReactNode {
    let userFullName = 'Loading...';

    const { user } = this.props;

    if (user) {
      const { title, first, last } = user.name;

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
