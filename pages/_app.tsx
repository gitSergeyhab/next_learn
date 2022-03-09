import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps } : AppProps) {
  return (
    <>
      <Head>
        <title>Next | MyApp</title>
        <meta name="description" content="Generated by create next app" />
        <link key={1} rel="icon" href="/favicon5.ico" />
      </Head>
      <Component {...pageProps} />
    </> 
  );
}

export default MyApp;