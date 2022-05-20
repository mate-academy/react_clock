import React from 'react';
import classNames from 'classnames';

type Props = {
  name: string,
};

export class ClockName extends React.Component<Props> {
  state = {
    isClocknameAnimated: false,
  };

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ isClocknameAnimated: true });

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
