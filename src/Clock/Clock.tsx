import React from 'react';

type Props = {
  name: string,
};

export class Clock extends React.PureComponent<Props> {
  newClockName = '';

  clockTypeName = '0';

  state = {
    clockName: 'React Clock:',
  };

  render() {
    const clockNamePrev = `The Clock was renamed from ${this.clockTypeName}`;

    const { name } = this.props;

    this.clockTypeName = name;

    if (Number(this.clockTypeName)) {
      // eslint-disable-next-line no-console
      console.log(`${clockNamePrev} to ${this.clockTypeName}`);
    }

    this.newClockName = `${this.state.clockName} ${name}`;

    return (
      <>
        {this.newClockName}
      </>
    );
  }
}
