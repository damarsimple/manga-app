import "../styles/globals.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "react-virtualized/styles.css";
import "tippy.js/dist/tippy.css"; // optional

import type { AppProps } from "next/app";
import { Box } from "@mui/material";
import Footer from "../components/Footer";
import { useColorMode } from "../stores/colorMode";
import Navbar from "../components/Navbar/Navbar";
import { ApolloProvider } from "@apollo/client";
import { client } from "../modules/client";
import NextNProgress from "nextjs-progressbar";
import ContextMenu from "../components/ContextMenu";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ArrowUpward } from "@mui/icons-material";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Router, useRouter } from "next/router";
import { GA_TRACKING_ID, pageview } from "../modules/gtag";
import Script from "next/script";
import Dashboard from "../components/Wrapper/Dashboard";

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
  }, []);

  // const handle = useCallback((x: string) => {
  //   const url = `${window.location.origin}${x.split("?")[0]}`;

  //   // console.log(`reported ${url}`);
  //   pageview(new URL(url));
  // }, []);

  // useEffect(() => {
  //   Router.events.on("routeChangeComplete", handle);

  //   return () => {
  //     Router.events.off("routeChangeComplete", handle);
  //   };
  // }, [Router.events]);

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
      <Head>
        <>
          <script
            src={
              "https://www.googletagmanager.com/gtag/js?id=" + GA_TRACKING_ID
            }
            async
          />
          <script id="google-analytics">
            {`
          window.dataLayer = window.dataLayer || [];

          function gtag(){window.dataLayer.push(arguments);}

          gtag('js', new Date());

          gtag('config', '${GA_TRACKING_ID}', {
            send_page_view: true
          });



        `}
          </script>
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
          <meta
            name="keywords"
            content="Gudangkomik, gudang komik, baca manga, baca komik, baca manga online, baca komik online"
          ></meta>

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </>
      </Head>
      <ThemeProvider theme={theme}>
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

          <Dashboard>
            <Component {...pageProps} />
          </Dashboard>
          <Footer />
          <ToastContainer />
        </Box>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
