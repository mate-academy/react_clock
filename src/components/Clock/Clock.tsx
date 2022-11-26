import { Component } from 'react';

type State = {
  today: string,
};

type Props = {
  name: string,
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  clockID = 0;

  componentDidMount():void {
    this.clockID = window.setInterval(this.dataNew, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>):void {
    const oldName = prevProps.name;
    const newName = this.props.name;

    if (oldName !== newName) {
      const str = (`Renamed from ${oldName} to ${newName}`);

      // eslint-disable-next-line no-console
      console.debug(str);
    }
  }

  componentWillUnmount():void {
    window.clearInterval(this.clockID);
  }

  dataNew = () => {
    const newData = new Date().toUTCString().slice(-12, -4);

    this.setState({ today: newData });
    // eslint-disable-next-line no-console
    console.info(newData);
  };

  render() {
    const { name } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today}
        </span>
      </div>
    );
  }
}
