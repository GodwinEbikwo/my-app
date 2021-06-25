import styles from './layout.module.scss';
import Head from 'next/head';
export const siteTitle = 'Bluu Lime';
export const url = 'https://plannify.vercel.app/';
export const description = 'Bluu lime knitted hand bags';

export default function Layout({ children, description }) {
  return (
    <section className={styles.layout_container}>
      <Head>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.layout_main}>{children}</div>
    </section>
  );
}
