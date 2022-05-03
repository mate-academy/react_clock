import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  updateStateSinceMountCounter: number;
};

export class Clock extends React.Component<Props> {
  timerId: NodeJS.Timer | null = null;

  state: State = {
    updateStateSinceMountCounter: 0,
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState((previousState: State) => (
        {
          updateStateSinceMountCounter:
            previousState.updateStateSinceMountCounter + 1,
        }
      ));

      // eslint-disable-next-line no-console
      console.log(new Date().toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const {
      clockName: prevName,
    } = prevProps;

    const {
      clockName: newName,
    } = this.props;

    if (prevName !== newName) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="Clock " data-cy="time">
        {new Date().toLocaleTimeString()}
      </div>
    );
  }
}
