import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import type { NextPage } from 'next'
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

const Home: NextPage = () => {




  return (
    <Box>

      <Navbar />

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
    </Box>
  )
}
export default Home
