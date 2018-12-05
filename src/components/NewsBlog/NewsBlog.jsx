import React, { Component } from 'react';
import BlogTitle from "../SiteParts/BlogTitle";
import Header from '../Header/Header';
import Page from '../Page/Page';

function NewsBlog() {
    return (
        <div>
            <Header />
            <Page>
                <BlogTitle title="Новости школы" subtitle="За неделю" />
            </Page>
        </div>
    );
}

export default NewsBlog;