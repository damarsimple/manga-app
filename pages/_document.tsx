import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";

export default function Document() {
  return (
    <Html lang="id-ID">
      <Head>
        <>
          <title>
            GudangKomik: Gudangnya Baca Manga Online Bahasa Indonesia
          </title>
          <meta name="copyright" content="GudangKomik" />
          <meta name="language" content="ID" />
          <meta name="tgn.nation" content="Indonesia" />
          <meta name="rating" content="general" />
          <meta name="distribution" content="GudangKomik" />
          <meta name="publisher" content="GudangKomik" />
          <meta name="Slurp" content="all" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
        </>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
