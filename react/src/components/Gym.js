import React, { Component } from 'react';
import { Callout } from 'react-foundation';

class Gym extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let showDetails;
    if (this.props.clickedState === this.props.id) {
      showDetails =
        <div>
          <div>{this.props.address}</div>
          <div>{this.props.city}, {this.props.state} {this.props.zip}</div>
        </div>;
    }

    let onClick = () => {
      this.props.onClick(this.props.id);
    };

    return (
      <div className="large-12 small-6 columns">
        <Callout id='gyms-index'>
          <div onClick={onClick}>
            {this.props.name}
            {showDetails}
          </div>
        </Callout>
      </div>
    );
  }
}

export default Gym;
