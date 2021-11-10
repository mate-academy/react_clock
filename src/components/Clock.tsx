import React from 'react';

type Props = {
  name: number;
};

type State = {
  currentDate: Date;
};

export class Clock extends React.Component <Props, State> {
  clockId?: NodeJS.Timeout;

  state: State = {
    currentDate: new Date(),
  };

  componentDidMount() {
    this.clockId = setInterval(() => {
      this.setState({ currentDate: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.clockId) {
      clearInterval(this.clockId);
    }
  }

  render() {
    const { currentDate } = this.state;
    const timeNow = currentDate.toLocaleTimeString();
    // eslint-disable-next-line
    console.log(timeNow);

    return (
      <div className="Clock">
        <p>
          { timeNow }
        </p>
      </div>
    );
  }
}
