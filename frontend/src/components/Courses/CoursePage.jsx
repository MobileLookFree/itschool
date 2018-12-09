import React, { Component } from 'react';
import './CoursePage.css';

import CourseCard from './CourseCard';
import BlogTitle from '../SiteParts/BlogTitle';
import Header from '../Header/Header';
import Page from '../Page/Page';
import FooterBack from '../Footer/FooterBack/FooterBack';

const CoursePage = (props) => {
    return (
        <div>
            <Header />
            <Page>
                <BlogTitle title="Курсы" />
                <div className="courses-card-grid">
                    <CourseCard courseName="Робототехника" />
                    <CourseCard courseName="Юный инженер" />
                    <CourseCard courseName="Основы бизнеса" />
                </div>
            </Page>
            <FooterBack />
        </div>
    );
}

export default CoursePage;