import { useEffect } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  useEffect(() => {
    // Set the iframe to occupy the full viewport height and width
    const iframe = document.getElementById('embeddedIframe') as HTMLIFrameElement;
    if (iframe) {
      iframe.style.width = '100%';
      iframe.style.height = '100vh';
    }
  }, []);

  return (
    <>
      <Head>
        <title>Your Page Title</title>
      </Head>
      <div className={styles.container}>
        <iframe
          id="embeddedIframe"
          src="https://alterassumeaggravate.com/p8r2qtnpts?key=06ac09d2de266d9e8a197541e85b92a0"
          title="Prothom Alo"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default Home;
