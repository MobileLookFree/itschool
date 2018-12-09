import React, { Component } from 'react';

import BlogTitle from '../SiteParts/BlogTitle';
import Header from '../Header/Header';
import Page from '../Page/Page';
import FooterBack from '../Footer/FooterBack/FooterBack';

const MainPage = (props) => {
    return (
        <div>
            <Header />
            <Page>
                <BlogTitle title="Текст на главной" />
            </Page>
            <FooterBack />
        </div>
    );
}

export default MainPage;