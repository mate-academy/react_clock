import React from 'react';

interface State {
  data: string,
}

type Props = {
  name: number;
};

export class Clock extends React.Component<Props, State> {
  timerId?: NodeJS.Timeout;

  state: State = {
    data: '',
  };

  componentDidMount() {
    this.timerId = setInterval(this.syncData, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  syncData = () => {
    const data = new Date();

    this.setState({
      data: data.toLocaleTimeString(),
    });
    // eslint-disable-next-line
    console.log(this.state.data);
  };

  render() {
    return (
      <span className="Clock">
        {this.state.data}
      </span>
    );
  }
}
