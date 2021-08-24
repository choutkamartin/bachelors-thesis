import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        {/* Název webový stránky na této stránce bude "Úvodní stránka! */}
        <title>Úvodní stránka</title>
      </Head>
      <div>
        <h1>Úvodní stránka</h1>
        <p>Toto je text k uvodní stránce</p>
      </div>
    </>
  );
}
