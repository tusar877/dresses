import { useEffect } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  useEffect(() => {
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
          src="https://temu.com"
          title="Prothom Alo"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default Home;
