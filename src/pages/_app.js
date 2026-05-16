import Head from 'next/head';
import { ErrorBoundary } from '../components/ErrorBoundary';
import "../styles/styles.css";

const SITE_URL = 'https://swimhangout.vercel.app';
const SHARE_IMAGE = `${SITE_URL}/swimhangout.png`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>swimhangout</title>
        <meta name="description" content="RSVP for the hangout and swim — May 22 &amp; May 27" />
        <meta property="og:title" content="swimhangout" />
        <meta property="og:description" content="RSVP for the hangout and swim — May 22 &amp; May 27" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={SHARE_IMAGE} />
        <meta property="og:url" content={SITE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={SHARE_IMAGE} />
        <meta name="theme-color" content="#1d4ed8" />
        <link rel="icon" href="/swimhangout.png" />
        <link rel="apple-touch-icon" href="/swimhangout.png" />
      </Head>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </>
  );
}