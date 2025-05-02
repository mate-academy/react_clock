import React, { Component } from 'react';

interface State {
  today: Date;
}

interface Props {
  name: string;
}

export class Clock extends Component<Props, State> {
  timerId: number | undefined;

  state: State = {
    today: new Date(),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.log(
        this.state.today.toLocaleTimeString('pt-BR', {
          timeZone: 'America/Sao_Paulo',
        }),
      );

      this.setState({ today: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId !== undefined) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">
          {this.state.today.toLocaleTimeString('pt-BR', {
            timeZone: 'America/Sao_Paulo',
          })}
        </span>
      </div>
    );
  }
}
