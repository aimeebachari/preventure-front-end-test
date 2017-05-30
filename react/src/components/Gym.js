import React, { Component } from 'react';
import { Callout } from 'react-foundation';

class Gym extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row container small-6 large-12 columns">
        <Callout id="gyms-index">
          <p>
            <strong>{this.props.name}</strong><br />
            {this.props.street}<br />
            {this.props.city}, {this.props.state} {this.props.zip}
          </p>
        </Callout>
      </div>
    );
  }
}

export default Gym;
