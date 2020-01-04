import React from 'react';
import { Global, css } from '@emotion/core';
import Styles from '../styles';
import useSiteMetaData from '../hooks/useSiteMetadata'
import Helmet from 'react-helmet';
import Navbar from './Navbar';

const Layout = ({ length, children }) => {
    const { title, description } = useSiteMetaData();

    return (
        <>
            <Global
                styles={css`
                    * {
                        box-sizing: border-box;
                        margin: 0;
                    }
                    /* See this: https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/ */
                    * + * {
                        margin-top: 1rem;
                    }
                    html,
                    body {
                        background-color: #333333;
                        margin: 0;
                        color: #666666;
                        font-family: Roboto, Helvetica;
                        font-size: 18px;
                        line-height: 1.4;
                        /* remove margin for the main div that Gatsby mounts into */
                        > div {
                            margin-top: 0;
                        }
                    }
                    h1,
                    h2,
                    h3,
                    h4,
                    h5,
                    h6 {
                    color: #999999;
                    line-height: 1.1;
                    + * {
                        margin-top: 0.5rem;
                    }
                    }
                    strong {
                    color: #999999;
                    }
                    li {
                    margin-top: 0.25rem;
                    }
                `}
            />
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
            <header
                css={css`
                        position: sticky;
                        height: ${Styles.heights.navbar};
                        top: 0;
                        z-index: 10;
                `}
            >
                <Navbar length={length} />
            </header>
            <main
                css={css`
                    margin: 0 auto;
                    max-width: 550px;
                `}
            >
                {children}
            </main>
        </>
    );
}

export default Layout;