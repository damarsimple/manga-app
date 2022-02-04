import "../styles/globals.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import type { AppProps } from "next/app";
import { Box } from "@mui/material";
import Footer from "../components/Footer";
import { useColorMode } from "../stores/colorMode";
import Navbar from "../components/Navbar";
import { useNavbarStore } from "../stores/navbar";
import { ApolloProvider } from "@apollo/client";
import { client } from "../modules/client";
import NextNProgress from "nextjs-progressbar";
import ContextMenu from "../components/ContextMenu";
import Head from "next/head";
import { useEffect, useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ArrowUpward } from "@mui/icons-material";

function MyApp({ Component, pageProps }: AppProps) {
  const { mode: modeStore } = useColorMode();

  const [showUp, setShowUp] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#4164b2",
      },
    },
  });

  const [loadTheme, setLoadTheme] = useState(false);

  const theme = loadTheme && modeStore == "dark" ? darkTheme : lightTheme;

  const { mode } = theme.palette;

  // wait till csr kicks in to set theme
  useEffect(() => {
    if (localStorage) {
      setLoadTheme(true);
    }

    const _Hasync = [];
    _Hasync.push(["Histats.start", "1,4473363,4,0,0,0,00010000"]);
    _Hasync.push(["Histats.fasi", "1"]);
    _Hasync.push(["Histats.track_hits", ""]);
    (function () {
      var hs = document.createElement("script");
      hs.type = "text/javascript";
      hs.async = true;
      hs.src = "//s10.histats.com/js15_as.js";
      (
        document.getElementsByTagName("head")[0] ||
        document.getElementsByTagName("body")[0]
      ).appendChild(hs);
    })();
  }, []);

  const handleTop = () => (document.documentElement.scrollTop = 0);

  useEffect(() => {
    setShowUp(true);
    window.addEventListener("scroll", listenToScroll);

    return () => {
      window.removeEventListener("scroll", listenToScroll);
      setShowUp(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    setShowUp(scrolled != 0);
  };

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>
            GudangKomik: Gudangnya Baca Manga Online Bahasa Indonesia
          </title>
          <meta
            name="description"
            content="Gudangkomik merupakan situs baca komik online dengan koleksi terlengkap dan terupdate. Kalian bisa membaca ratusan judul komik yang kami update setiap hari secara gratis dan dibalut dengan tampilan modern yang nyaman dan responsif"
          />
          <meta name="robots" content="index,follow" />
          <meta
            property="og:title"
            content="GudangKomik: Gudangnya Baca Manga Online Bahasa Indonesia"
          />
          <meta
            property="og:description"
            content="Gudangkomik merupakan situs baca komik online dengan koleksi terlengkap dan terupdate. Kalian bisa membaca ratusan judul komik yang kami update setiap hari secara gratis dan dibalut dengan tampilan modern yang nyaman dan responsif"
          />
          <meta property="og:url" content="https://gudangkomik.com"" />
          <meta property="og:locale" content="id-id" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@gudang_komik" />
          <meta
            name="keywords"
            content="Gudangkomik, gudang komik, baca manga, baca komik, baca manga online, baca komik online"
          />
          <meta name="copyright" content="GudangKomik" />
          <meta name="rating" content="general" />
          <meta name="language" content="ID" />
          <meta name="tgn.nation" content="Indonesia" />
          <meta name="rating" content="general" />
          <meta name="author" content="GudangKomik" />
          <meta name="distribution" content="GudangKomik" />
          <meta name="publisher" content="GudangKomik" />
          <meta name="Slurp" content="all" />
          <meta
            name="keywords"
            content="Gudangkomik, gudang komik, baca manga, baca komik, baca manga online, baca komik online"
          />
          <meta name="copyright" content="GudangKomik" />
          <meta name="rating" content="general" />
          <meta name="language" content="ID" />
          <meta name="tgn.nation" content="Indonesia" />
          <meta name="rating" content="general" />
          <meta name="author" content="GudangKomik" />
          <meta name="distribution" content="GudangKomik" />
          <meta name="publisher" content="GudangKomik" />
          <meta name="Slurp" content="all" />
        </Head>
        <Box
          sx={{
            backgroundColor: mode == "dark" ? "#111827" : "#e5e7eb",
            minHeight: "100vh",
          }}
        >
          {showUp && (
            <Box
              component="button"
              onClick={handleTop}
              sx={{
                position: "fixed",
                height: 40,
                width: 40,
                color: "white",
                bottom: 30,
                right: 10,
                p: 2,
                backgroundColor: "#4164b2",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 50,
                borderRadius: 20,
              }}
            >
              <ArrowUpward />
            </Box>
          )}

          <NextNProgress color="#ff0033" />

          <Navbar />
          <ContextMenu />

          <Component {...pageProps} />
          <Footer />
        </Box>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
