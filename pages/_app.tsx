import '../styles/globals.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import type { AppProps } from 'next/app'
import { Box, Container, createTheme, PaletteMode } from '@mui/material';
import { ColorModeContext } from '../contexts/ColorMode';
import { useState, useMemo } from 'react';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {

  const [mode, setMode] = useState<PaletteMode>('light');



  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode ?? "light",
        },
      }),
    [mode],
  );
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );



  return <ColorModeContext.Provider value={colorMode}>
    <Box sx={{ backgroundColor: "#e5e7eb" }}>
      <Box pt={12} />
      <Component {...pageProps} />
      <Footer />
    </Box >
  </ColorModeContext.Provider>
}

export default MyApp


