import "../styles/globals.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import type { AppProps } from "next/app";
import { Box, ThemeProvider, createTheme } from "@mui/material";
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
function MyApp({ Component, pageProps }: AppProps) {
  const { mode: modeStore } = useColorMode();

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
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

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Head>
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
