import React from 'react';

interface State {
  date: Date,
}

interface Props {
  name: number
}

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    setInterval(
      () => {
        this.setState(() => {
          const date = new Date();

          // eslint-disable-next-line no-console
          console.log(date.toLocaleTimeString());

          return { date: new Date() };
        });
      }, 1000,
    );
  }

  componentDidUpdate({ name }: Props) {
    if (this.props.name !== name) {
    // eslint-disable-next-line
  console.log(`The Clock was renamed from ${name} to ${this.props.name}`);
    }
  }

  render() {
    return (
      <div>
        Current time:
        {' '}
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}
