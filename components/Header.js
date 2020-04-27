import React from "react";
import PropTypes from "prop-types";
import './Header.scss'

const Header = React.memo(({ siteName, siteTagline }) => {
    return (
        <header>
            <div id="appHeader">
                <h1>{siteName}</h1>
                <h4>{siteTagline}</h4>
            </div>
            <div id="appHeaderImage">
                <img src="https://www.starsai.com/wp-content/uploads/2019/04/saibaba-vibuthi-job.jpg" width="200" class="headerImage" />
            </div>
            <div id="appHeaderMenu">
                <nav>
                    <a href="/"><i class="fas fa-check-circle"></i> How it works</a>
                    <a href="/"><i class="fas fa-question-circle"></i> What is Prashnavali</a>
                </nav>
            </div>
        </header>
    );
});

Header.displayName = "Header";

Header.propTypes = {
    siteName: PropTypes.string.isRequired,
    siteTagline: PropTypes.string.isRequired
};

Header.defaultProps = {
    siteName: "Om Sai Ram",
    siteTagline: 'Ask a question to Sai Baba'
};

export default Header;