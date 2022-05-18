import React from 'react';
import classNames from 'classnames';

type Props = {
  name: string,
};

export class ClockName extends React.Component<Props> {
  state = {
    isClocknameAnimated: false,
  };

  componentDidUpdate(oldName: Props) {
    if (oldName.name !== this.props.name) {
      setTimeout(() => {
        this.setState({ isClocknameAnimated: true });
      }, 0);

      setTimeout(() => {
        this.setState({ isClocknameAnimated: false });
      }, 500);
    }
  }

  render() {
    return (
      <h2 className={classNames('Clock__name', {
        Clock__name__slider: this.state.isClocknameAnimated,
      })}
      >
        {this.props.name}
      </h2>
    );
  }
}
