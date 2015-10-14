'use strict';

import React from 'react';

class Title extends React.Component {
  render() {
    return (
      <div>
        <a href={this.props.href}>
          <h3>
            {this.props.title}
          </h3>
        </a>
      </div>
    );
  }
};


export default Title