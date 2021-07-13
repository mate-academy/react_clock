import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
   state = {
     date: new Date(),
   }

   componentDidMount() {
     this.interval = setInterval(() => {
       this.setState({ date: new Date() });

       // eslint-disable-next-line no-console
       console.log(this.state.date.toLocaleTimeString());
     }, 1000);
   }

   componentWillUnmount() {
     clearInterval(this.interval);
   }

   render() {
     return (
       <>
         <p>
           Name:
           {' '}
           {this.props.name}
         </p>
         <p>
           Current time:
           {' '}
           {this.state.date.toLocaleTimeString()}
         </p>
       </>
     );
   }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
