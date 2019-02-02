import React, { Component } from 'react';

import CTAButton from '../../components/CTAButton/CTAButton';

class IntroPage extends Component {
    constructor(props) {
        super();
        this.props = props;
    }

    componentDidMount() {
        document.title = 'Intro Page';
    }

    render() {
        return (
            <div className="Page">
                <div className="container">
                    <h1 className="title">Willkommen bei Smartchairs</h1>
                    <p className="description">Introtext</p>
                    <CTAButton/>
                </div>
            </div>
        )
    }
};

export default IntroPage;