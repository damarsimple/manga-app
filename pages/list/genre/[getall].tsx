import { WithRouterProps } from "next/dist/client/with-router";
import { withRouter } from "next/router";
import React from "react";
import {
  Box,
  Paper,
  Grid,
  Typography,
  Divider,
  Chip,
  TextField,
} from "@mui/material";
import { ComicCard } from "../../../components/ComicCard";
import { useState } from "react";
import Link from "next/link";

function Catch({ router }: WithRouterProps) {
  const { getall, q } = router.query;

  const [type, setType] = useState<undefined | string>();
  const [mode, setMode] = useState(getall == "all" ? "Text Mode" : "Card Mode");
  return (
    <Box sx={{ m: 1 }}>
      <Paper sx={{ p: 1 }}>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h5">
            Daftar Komik Genre {(getall as string)?.toUpperCase()}
          </Typography>
        </Box>
        {getall !== "all" && (
          <>
            <Divider sx={{ my: 1 }} />
            {["Manga", "Manhwa", "Manhua"].map((e) => (
              <Chip
                label={e}
                key={e}
                sx={{ mx: 0.2 }}
                color={e == type ? "primary" : "secondary"}
                onClick={() => setType(e == type ? undefined : e)}
              />
            ))}
            <Divider sx={{ my: 1 }} />
            {["Card Mode", "Text Mode"].map((e) => (
              <Chip
                label={e}
                key={e}
                sx={{ mx: 0.2 }}
                color={e == mode ? "primary" : "secondary"}
                onClick={() => setMode(e)}
              />
            ))}
            <Divider sx={{ my: 1 }} />
          </>
        )}
        <TextField label="Cari Komik" size="small" fullWidth />
        <Divider sx={{ my: 1 }} />
        {mode == "Card Mode" && getall !== "all" ? (
          <>
            <Grid
              spacing={1}
              container
              sx={{ pt: 2, px: { xs: undefined, md: 10 } }}
            >
              {[...Array(10)].map((e, i) => (
                <Grid item key={i} xs={6} sm={3} lg={2}>
                  <ComicCard type="carousel" />
                </Grid>
              ))}
            </Grid>
          </>
        ) : (
          <Box>
            <Box>
              <Typography variant="h5">A</Typography>
              <Grid container spacing={1}>
                {[...Array(10)].map((e, i) => (
                  <Grid item xs={6} sm={3} lg={2} key={i}>
                    <Link href="/comic/[id]">
                      <a>
                        <Typography variant="body1">Naruto</Typography>
                      </a>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        )}
      </Paper>
    </Box>
  );
}

export default withRouter(Catch);
