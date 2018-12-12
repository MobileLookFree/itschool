import React, { Component } from 'react';
import './AboutPage.css';

import BlogTitle from '../SiteParts/BlogTitle';
import Header from '../Header/Header';
import Page from '../Page/Page';
import FooterBack from '../Footer/FooterBack/FooterBack';
import MapBox from './MapBox/MapBox';
import Article from '../SiteParts/Article';

const AboutPage = (props, children) => {
    return (
        <div>
            <Header />
            <Page>
                <Article articleTitle="История" articleText="Давно, до начала времен было 6 сингулярностей..." />
                <BlogTitle title="Контакты" />
                <div className="map-wrapper">
                    <MapBox />
                    <div className="contact-info">
                        <h3>Наш адрес</h3>
                        <p>г. Москва, Проспект Вернадского, д. 78
                        <br />
                            Контактный телефон: +7 499 215-65-65</p>
                    </div>
                </div>
            </Page>
            <FooterBack />
        </div>
    );
}

export default AboutPage;