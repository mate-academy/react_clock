/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

type Props = {
  name: number,
};

export class Clock extends React.Component<Props> {
  state = {
    date: new Date(),
  };

  timerId!: NodeJS.Timeout;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: { name: any; }) {
    const oldName = prevProps.name;
    const newName = this.props.name;

    if (oldName !== newName) {
      // console.log(`The Clock was renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <span>
        { this.state.date.toLocaleTimeString() }
        {/* { console.log(this.state.date.toLocaleTimeString())} */}
      </span>
    );
  }
}
