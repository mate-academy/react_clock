import { Component } from 'react';
import { CurrentTime } from './CurrentTime';

type Props = {
  name: string;
};

export class Clock extends Component<Props, {}> {
  componentDidUpdate(prevProps: Readonly<Props>) {
    console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
  }

  render() {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <CurrentTime />
      </div>
    );
  }
}
