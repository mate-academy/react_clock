import React from "react";

type Props = {
    name: string
}
type State = {
    time: Date
}
export class Clock extends React.Component<Props, State> {
    timerId: number | null = null;
    state: State = {
        time: new Date()
    };

    componentDidMount(): void {
        this.timerId = window.setInterval(() => {
            const now = new Date();
            // eslint-disable-next-line no-console
            console.log(now.toUTCString().slice(-12, -4));
            this.setState({time: now})
        }, 1000);
    }
    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        if (prevProps.name !== this.props.name) {
            console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
        }
    }
    componentWillUnmount(): void {
        if (this.timerId !== null) {
            window.clearInterval(this.timerId)
        };
    }
    
    render() {
        const {time} = this.state;
        const {name} = this.props
        return (
            <div className="Clock">
                <strong className="Clock__name">{name}</strong>
                    {' time is '}
                    <span className="Clock__time">
                        {time.toUTCString().slice(-12, -4)}
                    </span>
            </div>
        )
    }
}