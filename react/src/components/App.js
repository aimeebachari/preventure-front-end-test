import React, { Component }  from 'react';
import Gyms from './Gyms';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
    };
    this.setLocation = this.setLocation.bind(this);
  }

  setLocation(event) {
    this.setState({ location: event.target.value });
  }

  render() {
    return(
      <div>
        <h1 className="title"> Gym Search </h1>
        <form className='react-search row container small-6 large-12 columns'>
          <input type='text' id='search-input'  placeholder='  Enter your zip or city' onChange={this.setLocation}/>
        </form>
        <div>
          <Gyms
            location={this.state.location}
          />
        </div>
      </div>
    );
  }
}

export default App;
