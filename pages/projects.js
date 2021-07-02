import Head from 'next/head';
import { SmoothScrollProvider } from '../src/utils/SmoothScroll';
import { siteTitle, description } from '../src/components/layout';
import One from '../src/components/one';
import { Information, InformationTwo } from '../src/components/information';
import Cta from '../src/components/cta';

export default function Home() {
  return (
    <SmoothScrollProvider>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={description} />
      </Head>
      <One />
      <Cta />
      <Information />
      {/* <InformationTwo /> */}
    </SmoothScrollProvider>
  );
}
