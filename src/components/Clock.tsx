import React from 'react';

interface Props {
  name: number;
}

interface State {
  date: string;
}

export class Clock extends React.Component<Props, State> {
  timer = window.setInterval(() => {
    this.setState({
      date: new Date().toLocaleTimeString(),
    }, () => {
      // eslint-disable-next-line no-console
      console.log(this.state.date);
    });
  }, 1000);

  state: State = {
    date: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    // eslint-disable-next-line no-console
    console.log('mounted');

    return this.timer;
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    const oldName = prevProps.name;
    const newName = this.props.name;

    if (oldName !== newName) {
      // eslint-disable-next-line no-console
      console.log(`Clock was renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    // eslint-disable-next-line no-console
    console.log('ummounted');

    clearInterval(this.timer);
  }

  render() {
    const { date } = this.state;

    return (
      <div>
        {`time: ${date}`}
      </div>
    );
  }
}
