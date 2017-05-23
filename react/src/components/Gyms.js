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
    if (nextProps.zip.length == 5) {
      this.fetchData(nextProps);
    }
  }

  fetchData(nextProps) {
    fetch(`/api/v1/gyms`)
    .then(response => response.json())
    .then((res) => {
      this.setState({
        data: res.gyms
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
