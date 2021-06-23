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
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.layout_main}>{children}</div>
    </section>
  );
}
