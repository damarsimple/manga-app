import '../styles/globals.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import type { AppProps } from 'next/app'
import { Box, ThemeProvider, createTheme } from '@mui/material';
import Footer from '../components/Footer';
import { useColorMode } from '../stores/colorMode';
import Navbar from '../components/Navbar';
import { useNavbarStore } from '../stores/navbar';
function MyApp({ Component, pageProps }: AppProps) {


  const { mode: modeStore } = useColorMode();



  const theme = createTheme({
    palette: {
      mode: modeStore
    }
  })

  const { mode } = theme.palette

  return <ThemeProvider theme={theme}>


    <Navbar />
    <Box sx={{ backgroundColor: mode == "dark" ? "#111827" : "#e5e7eb" }}>
      <Component {...pageProps} />
      <Footer />
    </Box >
  </ThemeProvider>
}

export default MyApp


