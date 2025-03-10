import React from 'react';

type Props = {
  name: string;
};

export class Clock extends React.Component<Props, {}> {
  componentDidUpdate(prevProps: Props): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    return <strong className="Clock__name">{this.props.name}</strong>;
  }
}
