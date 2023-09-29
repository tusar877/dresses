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
      
      // Wait for the iframe to load
      iframe.onload = () => {
        // Inject JavaScript to block ads (this is a simple example)
        iframe.contentWindow?.eval(`
          // Add your ad-blocking JavaScript here
          // For example, you can try to hide ads by class name or ID
          // document.querySelector('.ad-container').style.display = 'none';
        `);
      };
    }
  }, []);

  return (
    <>
      <Head>
        <title>Prothom Alo</title>
      </Head>
      <div>
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
