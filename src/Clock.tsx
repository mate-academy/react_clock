import React from 'react';

interface Props {
    name: string;
    clock:boolean;
}
  
interface State {
    today: Date;
}
  
 export class Clock extends React.Component<Props, State> {
    state: State = {
      today: new Date(),
    };
    componentDidUpdate(prevProps: Readonly<Props>) {
        if (prevProps.name !== this.props.name) {
            if(this.props.clock) {
            // eslint-disable-next-line no-console
                console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
            }
        }
    }
    dateId = 0;

    componentDidMount(): void {
        this.dateId = window.setInterval(() => {
            this.setState({today: new Date()});
            if(this.props.clock) {
            // eslint-disable-next-line no-console
                console.log(new Date().toUTCString().slice(-12, -4));
            }
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.dateId);
    }

  render() {
    const {today} = this.state;
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}{' '}
        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}