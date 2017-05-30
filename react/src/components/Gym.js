import React, { Component } from 'react';
import { Callout } from 'react-foundation';

class Gym extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let chain;
    if (this.props.chain === "1") {
      chain = <p>This gym is part of a chain</p>;
    }

    return (
      <div className="row container small-6 large-12 columns"><br />
        <Callout id="gyms-index">
          <p>
            <strong>{this.props.name}</strong><br />
            {this.props.street}<br />
            {this.props.city}, {this.props.state} {this.props.zip}
          </p>
            {chain}
        </Callout><br />
      </div>
    );
  }
}

export default Gym;
