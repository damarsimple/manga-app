import { Box, Divider, Grid, Paper, Typography, Chip } from '@mui/material';
import type { GetServerSideProps, NextPage } from 'next'
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
import Navbar from '../components/Navbar';
import { ComicCard } from '../components/ComicCard';
import { useRouter } from 'next/router';

const Home: NextPage = () => {



  const { push } = useRouter();

  return (
    <Box p={2} display="flex" gap={2} flexDirection={"column"}>


      <Paper sx={{ p: 1 }}>
        {[
          {
            label: "Terbaru",
            path: "/"
          }, {
            label: "Hot",
            path: "/"
          },
          {
            label: "Rekomendasi",
            path: "/"
          },
          {
            label: "Daftar Isi",
            path: "/"
          },
          {
            label: "Daftar Genre",
            path: "/"
          },
          {
            label: "Adult R18+",
            path: "/",
            color: "danger"
          },
        ].map(({ label, path, color }) => <Chip sx={{ mx: 0.5 }} key={label} label={label} onClick={() => push(path)} />)}
      </Paper>

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
              slidesPerView: 5,
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
      </Paper>

      <Grid container spacing={1}>

        <Grid item xs={12} sm={9} md={10} display="flex" flexDirection="column" >
          <Paper sx={{ p: 2 }}>
            <Typography variant="h5" component="h3">UPDATE KOMIK TERBARU</Typography>
            <Divider sx={{ my: 2 }} />
            <Box display="flex" justifyContent="center" mx={{
              sm: 0.5,
              md: 1,
              lg: 3,
              xl: 10

            }}>
              <Grid container spacing={3}>
                {[...Array(36)].map((_, i) =>
                  <Grid item sm={12} lg={6} xl={3} key={i} width="100%" >
                    <ComicCard type="detailed" />
                  </Grid>
                )}
              </Grid>

            </Box>
          </Paper>

          <Paper sx={{ p: 2 }}>
            <Typography variant="h5" component="h3">KOMIK REKOMENDASI</Typography>
            <Divider sx={{ my: 2 }} />
            <Box display="flex" justifyContent="center" mx={{
              sm: 0.5,
              md: 1,
              lg: 3,
              xl: 10

            }}>
              <Grid container spacing={3}>
                {[...Array(36)].map((_, i) =>
                  <Grid item sm={12} lg={6} xl={3} key={i} width="100%" >
                    <ComicCard type="detailed" />
                  </Grid>
                )}
              </Grid>

            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={3} md={2}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h5" component="h3">TOP KOMIK</Typography>
            <Divider sx={{ my: 2 }} />
            <Grid container spacing={1}>
              {[...Array(5)].map((_, i) =>
                <Grid item xs={6} sm={12} key={i} width="100%">
                  <ComicCard type="top" isFirst={i == 0} />
                </Grid>
              )}
              <Grid item xs={6} sm={12} width="100%">
                <p>RINGBET88 daftar 12 situs judi <a href="https://carolesundfoundation.com/"><strong>slot online</strong></a> joker123 terpercaya di Indonesia degan games slot online terlengkap, judi bola online terbaik yang ada di Indonesia, judi online 24 jam non stop, proses deposit dan withdraw instant.</p>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

    </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
    }
  }
}

export default Home
