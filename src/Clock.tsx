import { Component } from 'react';
import './App.scss';
import './App';

type Props = {
  date: Date;
};

export class Clock extends Component<Props, {}> {
  render() {
    const { date } = this.props;
    const timeString = date.toLocaleTimeString();

    return (
      <>{timeString}</>
    );
  }
}
