import Head from 'next/head';

const a = { a: 1 };
const b = { ...a, b: 2 };

export default ({ children }) => (
  <>
    <Head>
      <title>Foo {b.b}</title>
    </Head>
    <main>{children}</main>
  </>
);
