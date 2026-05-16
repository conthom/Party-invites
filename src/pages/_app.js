import Head from 'next/head';
import { ErrorBoundary } from '../components/ErrorBoundary';
import "../styles/styles.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>lets hangout and swim</title>
        <meta name="description" content="RSVP for the hangout and swim — May 22 &amp; May 27" />
        <meta property="og:title" content="lets hangout and swim" />
        <meta property="og:description" content="RSVP for the hangout and swim — May 22 &amp; May 27" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/house.png" /> {/* You'll need to add this image */}
        <meta property="og:url" content="https://partyinv.vercel.app" />
        <meta name="twitter:card" content="house.png" />
        <meta name="theme-color" content="#1d4ed8" />
        <link rel="icon" href="/house.png" />
      </Head>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </>
  );
}