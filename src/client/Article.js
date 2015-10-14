'use strict';

import React from 'react';

class Article extends React.Component {
  render() {
    return (
      <div>
        <span>
          {this.props.article}
        </span>
      </div>
    );
  }
};


export default Article