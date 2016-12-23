import config from '../../config/style'
import Head from 'next/head'
import Header from '../Header'
import Nav from '../Nav'
import React from 'react'

const {
  fontColor,
  fontSizeRegular,
  lineHeight,
  spacingLarge
} = config

export default ({ children }) => (
  <div>
    <Head>
      <style>{`
        html {
          color: ${fontColor};
          line-height: ${lineHeight};
          font-family: 'Nirmala UI', 'Droid', 'Helvetica', 'Arial', sans-serif;
          font-size: ${fontSizeRegular}px;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
        }

        body {
          margin: 0;
          padding-bottom: ${spacingLarge}px;
        }

        article,
        footer,
        header,
        main,
        nav,
        section {
          display: block;
        }

        h1,
        h2,
        h3,
        p {
          font-size: 100%;
          margin: 0;
        }

        a {
          background-color: transparent;
        }

        a:active,
        a:hover {
          outline: 0;
        }

        b,
        strong {
          font-weight: bold;
        }

        img {
          border: 0;
        }

        @media (min-width: 800px) and (min-height: 500px) {
          html {
            font-size: ${fontSizeRegular}px;
          }
        }
      `}</style>
    </Head>
    <Header />
    <Nav />
    {children}
  </div>
)
