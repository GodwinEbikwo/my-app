import Head from 'next/head';
import { SmoothScrollProvider } from '../src/utils/SmoothScroll';
import  { siteTitle, description } from '../src/components/layout';
import Hero from '../src/components/hero';
import One from '../src/components/one';
import Two from '../src/components/two';
import Banner from '../src/components/banner';

export default function Home() {
  return (
    <SmoothScrollProvider>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={description} />
      </Head>

      <One />
      <Two />
    </SmoothScrollProvider>
  );
}
