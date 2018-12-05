import React, { Component } from 'react';
import BlogTitle from './SiteParts/BlogTitle';
import Page from './Page/Page';

function Page404(props) {
    return (
        <div>
            <Page>
                <BlogTitle title="404" subtitle="Страница не найдена:(" />
            </Page>
        </div>
    );
}

export default Page404;