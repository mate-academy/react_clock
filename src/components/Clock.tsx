import React from 'react';

type Props = {
  name: number;
};

type State = {
  date: string;
};

export class Clock extends React.Component<Props, State> {
  timer: number;

  constructor(props: Props) {
    super(props);

    this.timer = 0;
  }

  state: State = {
    date: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(this.state.date);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        {this.state.date}
      </div>
    );
  }
}
