import React, { Component } from 'react';
import Gym from './Gym';

class Gyms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.fetchData = this.fetchData.bind(this);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.fetchData(nextProps);
  }


  fetchData(nextProps) {
    fetch(`/api/v1/gyms/${nextProps.location}`)
    .then(response => response.json())
    .then((response) => {
      this.setState({
        data: response
      });
    });
  }

  render() {
   let gyms = this.state.data.map(gym => {
     return (
       <Gym
         key={gym.id}
         id={gym.id}
         name={gym.name}
         street={gym.street}
         city={gym.city}
         state={gym.state}
         zip={gym.zip}
         chain={gym.is_chain}
       />
     );
   });

   return (
     <div>
       {gyms}
     </div>
   );
 }
}

export default Gyms;
