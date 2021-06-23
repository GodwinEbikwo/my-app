import Head from 'next/head'
import { SmoothScrollProvider } from '../src/utils/SmoothScroll';
import Layout, {siteTitle} from '../src/components/layout';
import Header from '../src/components/header';
import Hero from '../src/components/hero';
import One from '../src/components/one';
import Two from '../src/components/two';

export default function Home() {
  return (
    <SmoothScrollProvider>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <Header />
        <Hero />
        <One />
        <Two />
        <One />
      </Layout>
    </SmoothScrollProvider>
  );
}
