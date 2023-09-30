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
        // Define a function to block ads (customize this as needed)
        const blockAds = () => {
          // Replace this code with ad-blocking logic specific to the external website
          // You may need to inspect the external website's structure to identify and block ads
          // For example, you can try to hide ads by class name or ID
          const adElements = iframe.contentWindow?.document.querySelectorAll('.ad-container');
          if (adElements) {
            adElements.forEach((adElement) => {
              adElement.style.display = 'none'; // Hide the ad element
            });
          }
        };

        // Execute the ad-blocking function when the iframe loads
        blockAds();

        // Additionally, you can set an interval to periodically block ads if they load dynamically
        // setInterval(blockAds, 1000); // Adjust the interval as needed
      };
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
          src="https://mlwbd.com"
          title="Prothom Alo"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default Home;
