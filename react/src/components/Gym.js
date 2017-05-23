import React, { Component } from 'react';
import { Callout } from 'react-foundation';

class Gym extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="large-12 small-6 columns">
        <Callout id="gyms-index">
          <p>
            <strong>{this.props.name}</strong><br />
            {this.props.street}
            {this.props.city}
          </p>
        </Callout>
      </div>
    );
  }
}

export default Gym;
