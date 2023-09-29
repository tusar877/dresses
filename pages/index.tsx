import { useEffect } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  useEffect(() => {
    window.location.href = 'https://warriorplus.com/o2/a/kc2ykv/0';
  }, []);

  return (
    <>
      <Head>
        <title>Earn Money</title>
        <meta name="description" content="Here you go" />
      </Head>
    </>
  );
};

export default Home;
