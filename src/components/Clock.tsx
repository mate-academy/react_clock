import React from 'react';

interface Props {
  name: string;
  hasClock: boolean;
}

export class Clock extends React.Component<Props, {}> {
  componentDidUpdate(prevProps: Props): void {
    if (this.props.hasClock && prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    const { name } = this.props;

    return <strong className="Clock__name">{name}</strong>;
  }
}
