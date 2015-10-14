'use strict';

import React from 'react';

class Link extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.link.url,
      title: props.link.title
    };
  }
  render() {
    return (
      <div>
        <a href={this.state.url}>
          {this.state.title}
        </a>
      </div>
    );
  }
};

Link.propTypes = {
  url: React.PropTypes.string,
  title: React.PropTypes.string
};


export default Link