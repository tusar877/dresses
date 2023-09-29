import { useEffect } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  useEffect(() => {
    // Set the iframe to occupy the full viewport height and width
    const iframe = document.getElementById('embeddedIframe') as HTMLIFrameElement;
    if (iframe) {
      iframe.style.width = '100vh';
      iframe.style.height = '100vh';
    }
  }, []);

  return (
    <>
      <Head>
        <title>Prothomalo News</title>
      </Head>
      <div className={styles.container}>
        <iframe
          id="embeddedIframe"
          src="https://prothomalo.com"
          title="Prothom Alo"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default Home;
