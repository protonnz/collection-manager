import Head from 'next/head';
import { chainKeyDefault } from '@configs/globalsConfig';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <Head>
      <meta name="robots" content="noindex" />
    </Head>
  );
}

export async function getServerSideProps() {
  const destination = chainKeyDefault;

  return {
    redirect: {
      destination,
      permanent: true,
    },
  };
}
