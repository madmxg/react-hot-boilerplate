'use strict';

import React from 'react';

import ArticleView from './ArticleView';


class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: props.articles
    };
  }
  render() {
    let articles = this.state.articles.map(function(item, i) {
      return (
        <ArticleView key={i} title={item.title} article={item.article} link={item.link} />
      );
    });

    return (
      <div>
        {articles}
      </div>
    );
  }
};

ArticleList.propTypes = {
  articles: React.PropTypes.array
};
ArticleList.defaultProps = {
  articles: [
    {
      title: 'Title 1',
      article: 'Article 1',
      link: {
        url: '#',
        title: 'Read more...'
      }
    },
    {
      title: 'Title 2',
      article: 'Article 3',
      link: {
        url: '#',
        title: 'Read more...'
      }
    }

  ]
};


export default ArticleList