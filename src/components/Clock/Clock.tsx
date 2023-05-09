import React from 'react';

interface State {
  date: string;
}

interface Props {
  name: string,
}

export class Clock extends React.Component <Props, State> {
  state:Readonly<State> = {
    date: '',
  };

  today = new Date().toUTCString().slice(-12, -4) ;

  dateId = 0;

  componentDidMount(): void {
    this.setState({ date: new Date().toUTCString().slice(-12, -4) });

    this.dateId = window.setInterval(() => {
      this.setState({ date: new Date().toUTCString().slice(-12, -4) });
      window.console.info(this.state.date);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      window.console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    // this code stops the timer
    window.clearInterval(this.dateId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}

        <span className="Clock__time">
          {`${this.state.date}`}
        </span>
      </div>
    );
  }
}
