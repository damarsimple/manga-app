import { ThemeProvider } from '@emotion/react';
import { AccessTime, Book, LocalMovies, Person, StarRate } from '@mui/icons-material';
import { AppBar, Avatar, Box, Chip, createTheme, Divider, Grid, IconButton, Menu, MenuItem, PaletteMode, Paper, Typography } from '@mui/material';
import type { NextPage } from 'next'
import Image from 'next/image';
import Link from 'next/link';
import { useState, useMemo, createContext, useContext } from 'react';

// import Swiper core and required modules

import SwiperCore, {
  Navigation, Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

const ColorModeContext = createContext({ toggleColorMode: () => { } });

const Home: NextPage = () => {



  const [accountEl, setAccountEl] = useState<Element | null>(null)

  const handleClose = () => {
    setAccountEl(null);
  };


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


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed">
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                sx={{ p: 2 }}
              >
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <Image src="https://gudangkomik.com/img/logo.png" width={250} height={50} alt="logo" />
                </Box>
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                  <Image src="https://gudangkomik.com/android-icon-48x48.png" width={48} height={48} alt="logo" />
                </Box>

              </IconButton>
              <Box sx={{ display: "flex" }}>
                {["Manga", "Manhwa", "Manhua"].map(e =>
                  <Box key={e} sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      sx={{ mr: 2 }}
                    >
                      <Typography fontWeight={900} variant="body1" textTransform="uppercase" >{e}</Typography>
                    </IconButton>
                  </Box>
                )}
              </Box>
              <Box display="flex">
                <Box display="flex" alignItems="center" gap={0.2}>
                  <Typography variant="caption">  {theme.palette.mode} mode</Typography>
                  <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                  </IconButton>
                </Box>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  sx={{ mr: 2 }}
                  onClick={(e) => setAccountEl(e.currentTarget)}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 48, height: 48 }}
                  />
                </IconButton>
              </Box>
            </Box>
          </AppBar>
        </Box>
        <Menu
          id="menu-appbar"
          anchorEl={accountEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(accountEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Dashboard</MenuItem>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>


        <Box pt={12} />

        <Paper sx={{ p: 4 }}>
          <Swiper
            pagination
            navigation
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              // when window width is >= 480px
              768: {
                slidesPerView: 4,
                spaceBetween: 30
              },
              // when window width is >= 640px
              1024: {
                slidesPerView: 6,
                spaceBetween: 40
              }
            }}
            style={{ paddingBottom: 30 }}
          >
            {[...Array(10)].map((_, i) =>
              <SwiperSlide key={i}>
                <ComicCard type="carousel" />
              </SwiperSlide>
            )}
          </Swiper>

          <Grid container spacing={1}>

            <Grid item xs={10} display="flex" flexDirection="column" gap={1}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h5" component="h3">UPDATE KOMIK TERBARU</Typography>
                <Divider sx={{ my: 2 }} />
                <Grid container spacing={1}>
                  {[...Array(36)].map((_, i) =>
                    <Grid item sm={12} md={6} lg={3} key={i} width="100%">
                      <ComicCard type="detailed" />
                    </Grid>
                  )}
                </Grid>
              </Paper>

              <Paper sx={{ p: 2 }}>
                <Typography variant="h5" component="h3">KOMIK REKOMENDASI</Typography>
                <Divider sx={{ my: 2 }} />
                <Grid container spacing={1}>
                  {[...Array(36)].map((_, i) =>
                    <Grid item sm={12} md={6} lg={3} key={i} width="100%">
                      <ComicCard type="detailed" />
                    </Grid>
                  )}
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={2}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h5" component="h3">TOP KOMIK</Typography>
                <Divider sx={{ my: 2 }} />
                <Grid container spacing={1}>
                  {[...Array(5)].map((_, i) =>
                    <Grid item sm={12} key={i} width="100%">
                      <ComicCard type="top" isFirst={i == 0} />
                    </Grid>
                  )}
                </Grid>
              </Paper>
            </Grid>


          </Grid>
        </Paper>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export const ComicCard = ({ isFirst, type = "detailed" }: {
  type?: "detailed"
  | "carousel"
  | "top",
  isFirst?: boolean
}) => {

  const ChapterTimestamp = () => <Link href={"/chapter/1"} >
    <a>
      <Box display="flex" justifyContent="space-between" pt={1} >
        <Box display="flex" alignItems="center" gap={0.5}>
          <Book fontSize="small" />
          <Typography variant={"caption"}>Chapter 1</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={0.5}>
          <AccessTime fontSize="small" />
          <Typography variant={"caption"} >10 menit yang lalu</Typography>
        </Box>
      </Box>
    </a>
  </Link>

  const AuthorFormatted = () =>
    <Link href={"/chapter/1"} >
      <a>
        <Box display="flex" justifyContent="space-between" pt={1} >
          <Box display="flex" alignItems="center" gap={0.5}>
            <Person fontSize="small" />
            <Typography variant={"caption"}>Author</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={0.5}>
            <Typography variant={"caption"} >The Great sun Kingdom</Typography>
          </Box>
        </Box>
      </a>
    </Link>

  const GenreFormatted = () =>
    <Box display="flex" justifyContent="space-between" pt={1} >
      <Box display="flex" alignItems="center" gap={0.5}>
        <LocalMovies fontSize="small" />
        <Typography variant={"caption"}>Genres</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={0.1}>
        {["Adventure", "Cool", "Bruh"].map((e, i) => <Chip key={i} label={e} size="small" />)}
      </Box>
    </Box>
  const LastUpdatedFormatted = () =>
    <Box display="flex" justifyContent="space-between" pt={1} >
      <Box display="flex" alignItems="center" gap={0.5}>
        <AccessTime fontSize="small" />
        <Typography variant={"caption"}>Last Updated</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={0.5}>
        <Typography variant={"caption"} >10 menit yang lalu</Typography>
      </Box>
    </Box>

  const TotalChapterFormatted = () =>
    <Box display="flex" justifyContent="space-between" pt={1} >
      <Box display="flex" alignItems="center" gap={0.5}>
        <Book fontSize="small" />
        <Typography variant={"caption"}>Total Chapter</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={0.5}>
        <Typography variant={"caption"} >100 Chapter</Typography>
      </Box>
    </Box>


  const TitleFormatted = () =>
    <Link href={"/comics/"}>
      <a >
        <Typography variant={"h5"}>Eleceed</Typography>
      </a>
    </Link>

  return <Paper elevation={1} sx={{ display: "flex", width: "100%" }}>

    {type == "carousel" &&
      <Box sx={{ p: 1 }}>
        <Image src="https://cdn.gudangkomik.com/eleceed/thumb.jpg?width=240" height={320} width={240} alt="Cover" />
        <TitleFormatted />
        <ChapterTimestamp />
      </Box>
    }
    {type == "top" &&
      <Box sx={{ p: 1 }}>
        <Image src="https://cdn.gudangkomik.com/eleceed/thumb.jpg?width=240" height={320} width={240} alt="Cover" />

        <Box display="flex" alignItems="center" gap={0.5}>
          {isFirst && <StarRate />}
          <TitleFormatted />
        </Box>
        <AuthorFormatted />
        <GenreFormatted />
        <TotalChapterFormatted />
        <LastUpdatedFormatted />
      </Box>
    }
    {type == "detailed" &&
      <Box display="flex" width="100%">
        <Box display="flex" alignItems="center">
          <Image src="https://cdn.gudangkomik.com/eleceed/thumb.jpg?width=240" height={320 / 2} width={240 / 2} alt="Cover" />
        </Box>
        <Box width={"100%"} p={1}>
          <Box display="flex" alignItems="center">
            <TitleFormatted />
          </Box>
          <Divider />
          {[...Array(4)].map((_, i) =>
            <ChapterTimestamp key={i} />
          )}
        </Box>
      </Box>}
  </Paper>



}


import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';



export default Home
