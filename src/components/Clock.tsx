import React from 'react';

type Props = {
  name: string;
};

class Clock extends React.Component<Props> {
  state = {
    today: new Date(),
  };

  dateUpdate?: number;

  componentDidMount(): void {
    this.dateUpdate = window.setInterval(() => {
      const now = new Date();

      this.setState({ today: now });

      // eslint-disable-next-line no-console
      console.log(now.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.dateUpdate);
  }

  componentDidUpdate(prevProps: Readonly<{ name: string }>): void {
    const oldName = prevProps.name;
    const newName = this.props.name;

    if (oldName !== newName) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${oldName} to ${newName}`);
    }
  }

  render() {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}

export default Clock;
