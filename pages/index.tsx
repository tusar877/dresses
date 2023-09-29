import { useEffect } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Your Page Title</title>
      </Head>
      <div className={styles.container}>
        <iframe
          src="https://prothomalo.com"
          width="100%"
          height="100%"
          title="Prothom Alo"
        ></iframe>
      </div>
    </>
  );
};

export default Home;
