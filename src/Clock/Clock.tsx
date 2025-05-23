import React from 'react';

type Props = {
  name: string;
};

export class Clock extends React.Component<Props> {
  render() {
    const { name } = this.props;

    return <strong className="Clock__name">{name}</strong>;
  }
}
