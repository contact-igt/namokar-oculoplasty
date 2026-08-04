import { useEffect, useState } from "react";
import Head from "next/head";
import "@/style/globals.css";
import Layout from "@/common/Layout";
import useUTMSource from "@/utils/useUTMSource";

export default function App({ Component, pageProps }) {
  const [ready, setReady] = useState(false);

  useUTMSource();

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </Head>
      <Layout>
        <div className={ready ? "page-enter" : ""} style={{ visibility: ready ? "visible" : "hidden" }}>
          <Component {...pageProps} />
        </div>
      </Layout>
    </>
  );
}
