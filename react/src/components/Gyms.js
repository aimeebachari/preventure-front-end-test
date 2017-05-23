import React, { Component } from 'react';

class Gyms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  fetchData(nextProps) {
    fetch(`http://fe-test.preventure.com/api/v1/gyms/${nextProps.zip}`)
    .then(response => response.json())
    .then((res) => {
      this.setState({
        data: res
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
