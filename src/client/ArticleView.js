'use strict';

import React from 'react';

import Title from './Title';
import Article from './Article';
import Link from './Link';


class ArticleView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      article: props.article,
      link: props.link
    };
  }
  render() {
    return (
      <div>
        <Title title={this.state.title} href={this.state.link.url}/>
        <Article article={this.state.article} />
        <Link link={this.state.link} />
      </div>
    );
  }
};

ArticleView.propTypes = {
  title: React.PropTypes.string,
  article: React.PropTypes.string,
  link: React.PropTypes.object
};


export default ArticleView