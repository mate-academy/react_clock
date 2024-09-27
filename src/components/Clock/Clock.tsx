import React from 'react';

interface State {
  today: Date;
}

interface Props {
  name: string;
}

export class Clock extends React.PureComponent<Props> {
  state: State = {
    today: new Date(),
  };

  timeId = 0;

  componentDidMount() {
    this.timeId = window.setInterval(() => {
      // eslint-disable-next-line
      this.setState(prevState => {
        const newToday = new Date();

        // eslint-disable-next-line no-console
        console.log(newToday.toUTCString().slice(-12, -4));

        return { today: newToday };
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timeId);
  }

  render() {
    const { today } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
