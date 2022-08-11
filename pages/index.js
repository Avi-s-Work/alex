import Head from "next/head";
import Script from "next/script";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Alex</title>
        <link
          rel="icon"
          type="image/svg"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Orange_circle_100%25.svg/1024px-Orange_circle_100%25.svg.png"
        />
      </Head>
      <Script src="/accordion.js"></Script>
    </div>
  );
}
