import React from 'react';
import './Clock.scss';

type Props = {
  name: number,
};

type State = {
  date: string,
  timerId: NodeJS.Timer,
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date().toLocaleTimeString(),
    timerId: setInterval(() => {}),
  };

  componentDidMount() {
    this.state.timerId = setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString(),
      });
      // eslint-disable-next-line no-console
      console.log(this.state.date);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render() {
    return (
      <fieldset>
        <legend>
          <mark>
            this is Clock component
          </mark>
        </legend>
        <h1>
          Hello I`m Clock named &#34;Blink-
          {this.props.name}
          &#34;
          <br />
          <div data-cy="time">
            {this.state.date}
          </div>
        </h1>
      </fieldset>
    );
  }
}
