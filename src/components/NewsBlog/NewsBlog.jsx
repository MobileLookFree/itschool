import React, { Component } from 'react';
import BlogTitle from "../SiteParts/BlogTitle";
import Header from '../Header/Header';
import Page from '../Page/Page';
import Article from '../SiteParts/Article';

function NewsBlog() {
    return (
        <div>
            <Header />
            <Page>
                <BlogTitle title="Новости школы" subtitle="За неделю" />
                <Article articleTitle="История" articleText="Мы с Иваном Ильичом..."/>
            </Page>
        </div>
    );
}

export default NewsBlog;