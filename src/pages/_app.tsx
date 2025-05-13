import "../styles/styles.css";
import type { AppProps } from "next/app";
import React, { useState, useEffect } from "react";

// import Footer from '@/components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}