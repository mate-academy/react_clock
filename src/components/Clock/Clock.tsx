import React from 'react';

import './Clock.scss';

type Props = {
  name?: string;
};

interface State {
  updatesSinceMount: number;
}

export class Clock extends React.Component<Props, State> {
  private timerId: NodeJS.Timer | null;

  constructor(props: Props) {
    super(props);

    this.timerId = null;
  }

  state: State = {
    updatesSinceMount: 0,
  };

  componentDidMount() {
    this.activateTimer();
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      const {
        name: prevName,
      } = prevProps;

      const {
        name: newName,
      } = this.props;

      /* eslint-disable-next-line no-console */
      console.log(`Was renamed from ${prevName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
    }
  }

  activateTimer() {
    this.timerId = setInterval(() => {
      this.setState((prevState: State) => (
        {
          updatesSinceMount: prevState.updatesSinceMount + 1,
        }
      ));

      /* eslint-disable-next-line no-console */
      console.log((new Date()).toLocaleString());
    }, 1000);
  }

  deactivateTimer() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="Clock" data-cy="time">
        {(new Date()).toLocaleTimeString()}
      </div>
    );
  }
}
