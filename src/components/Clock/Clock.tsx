import React from 'react';

interface Props {
  name: number;
}

interface State {
  date: string;
}

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
      this.setState({
        date: new Date().toLocaleTimeString(),
      });

      // eslint-disable-next-line
      console.log(this.state.date)
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const oldName = prevProps.name;
    const newName = this.props.name;

    if (prevProps.name !== newName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${oldName} to ${newName}`)
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { date } = this.state;

    return (
      <div>
        <span>{`Current time: ${date}`}</span>
      </div>
    );
  }
}
