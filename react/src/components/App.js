import React, { Component }  from 'react';
import Gyms from './Gyms';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
    };
    this.setZip = this.setZip.bind(this);
  }

  setZip(event) {
    this.setState({ zip: event.target.value });
  }

  render() {
    return(
      <div>
        <h1> Gym Search </h1>
        <form>
          <input type='text' id='react-search' className='react-search' placeholder='Enter your zip or city and state' onChange={this.setZip}/>
        </form>
        <div>
          <Gyms
            zip={this.state.zip}
          />
        </div>
      </div>
    );
  }
}

export default App;
