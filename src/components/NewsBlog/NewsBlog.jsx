import React, { Component } from 'react';
import BlogTitle from "../SiteParts/BlogTitle";

class NewsBlog extends Component {

    render() {
        return (
            <div>
                <BlogTitle title="Новости школы" subtitle="За неделю"/>
            </div>
        );
    }
}

export default NewsBlog;