import React from 'react';

type Props = {
  name: string,
};

type State = {
  time: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date: Date = new Date();

      this.setState({ time: date.toLocaleTimeString() });

      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps !== this.props)
    // eslint-disable-next-line
    console.log('The Clock was renamed from oldName to newName');
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <>
        <h3 className="fs-2">{`Clockname: ${name}`}</h3>
        <p className="text-success fs-2">{`Current time: ${time}`}</p>
      </>
    );
  }
}
