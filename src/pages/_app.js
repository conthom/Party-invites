import Head from 'next/head';
import { ErrorBoundary } from '../components/ErrorBoundary';
import "../styles/styles.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Party Invites</title>
        <meta name="description" content="RSVP to our upcoming party!" />
        <meta property="og:title" content="Party Invites" />
        <meta property="og:description" content="RSVP to our upcoming party!" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/house.png" /> {/* You'll need to add this image */}
        <meta property="og:url" content="https://partyinv.vercel.app" />
        <meta name="twitter:card" content="house.png" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/house.png" />
      </Head>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </>
  );
}