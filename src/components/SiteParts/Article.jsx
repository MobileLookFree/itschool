import React, { Component } from 'react';
import BlogTitle from './BlogTitle';
import './Article.css';

const Article = (props) => {
        return (
            <div className="article-block">
                <BlogTitle title={props.articleTitle} subtitle={props.articleSubtitle}/>
                <p className="articleText">{props.articleText}</p>
            </div>
        );
}

export default Article;