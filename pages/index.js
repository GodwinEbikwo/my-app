import Head from 'next/head';
import { SmoothScrollProvider } from '../src/utils/SmoothScroll';
import { siteTitle, description } from '../src/components/layout';
import Hero from '../src/components/hero';
import One from '../src/components/one';
import Two from '../src/components/two';
import Landing from '../src/components/landing';
import { Information, InformationTwo } from '../src/components/information';
import Cta from '../src/components/cta';
import Footer from '../src/components/footer';
import Shop from '../src/components/shop';
import Main from '../src/components/main';
import Nav from '../src/components/nav';
import Header from '../src/components/header';
import Apex from '../src/components/apex/home/index'


export default function Home() {
  return (
    <SmoothScrollProvider>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={description} />
      </Head>

    
      <Nav />
    <Apex/>
      {/* <Main /> */}
      {/* <One /> */}
      {/* <Landing /> */}
      {/* <Shop /> */}
      {/* <Information /> */}
      {/* <InformationTwo /> */}
      {/* <Cta /> */}
      {/* <Product /> */}
    </SmoothScrollProvider>
  );
}
