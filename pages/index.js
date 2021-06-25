import Head from 'next/head';
import { SmoothScrollProvider } from '../src/utils/SmoothScroll';
import Layout, { siteTitle, description } from '../src/components/layout';
import Header from '../src/components/header';
import Hero from '../src/components/hero';
import One from '../src/components/one';
import Two from '../src/components/two';
import Banner from '../src/components/banner';

export default function Home() {
  return (
    <SmoothScrollProvider>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
          <meta name="description" content={description} />
        </Head>
        {/* <Banner /> */}
        {/* <Header />
        <Hero /> */}
        <One />
        <Two />

        {/*
        
        <One />
        <One />
        <One /> */}
      </Layout>
    </SmoothScrollProvider>
  );
}
