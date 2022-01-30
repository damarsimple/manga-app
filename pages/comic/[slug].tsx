import {
  Box,
  Button,
  Paper,
  Typography,
  Divider,
  Chip,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Grid,
  IconButton,
  TextField,
  Stack,
} from "@mui/material";
import { WithRouterProps } from "next/dist/client/with-router";
import { withRouter } from "next/router";
import { useEffect, useState } from "react";
import { ComicSeo } from "../../components/Seo/Comic";
import Image from "next/image";
import {
  AccessTime,
  Bento,
  Book,
  Bookmark,
  BookmarkAdd,
  ListAlt,
  RemoveRedEye,
  Report,
  Star,
} from "@mui/icons-material";
import { ComicCard } from "../../components/ComicCard";
import { useNavbarStore } from "../../stores/navbar";
import Link from "next/link";
function Slug({ router }: WithRouterProps) {
  const [chapMode, setChapMode] = useState<"grid" | "list">("grid");
  const { setTransparent, setTransparentMode } = useNavbarStore();

  useEffect(() => {
    setTransparent(true);
    setTransparentMode(true);
    window.addEventListener("scroll", listenToScroll);

    return () => {
      window.removeEventListener("scroll", listenToScroll);
      setTransparentMode(false);
      setTransparent(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const chapters = [...Array(100)].map((_, i) => `Chapter ${i + 1}`);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    setTransparent(scrolled == 0);

    console.log(`called ${scrolled}`);
  };

  const { push } = router;

  return (
    <div>
      <ComicSeo />
      <Paper>
        <Box
          sx={{
            position: "relative",
            height: {
              xs: 600,
              md: 570,
            },
          }}
        >
          <Box
            sx={{
              height: 250 * 2,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 90%),linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url('https://cdn.gudangkomik.com/one-piece/thumbWide.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Box>

          <Box
            sx={{
              bottom: 0,
              position: "absolute",
              color: "white",
              p: 16,
              display: "flex",
              gap: 2,
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
          >
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Box display="flex" alignItems="center">
                <Image
                  src="https://cdn.gudangkomik.com/eleceed/thumb.jpg?width=240"
                  height={320 / 1.2}
                  width={240 / 1.2}
                  alt="Cover"
                />
              </Box>
              <Box
                sx={{
                  display: {
                    xs: "block",
                    sm: "none",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  textTransform={"uppercase"}
                  fontWeight="bold"
                >
                  One Piece
                </Typography>
                <Typography variant="body1" textTransform={"uppercase"}>
                  Oda Keichi
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <Box>
                <Typography
                  variant="h2"
                  textTransform={"uppercase"}
                  fontWeight="bold"
                >
                  One Piece
                </Typography>
                <Typography variant="h4" textTransform={"uppercase"}>
                  Oda Keichi
                </Typography>
              </Box>
              <Box display="flex" gap={1}>
                <Typography>Berjalan</Typography>
                <Box display="flex" gap={1} alignItems="center">
                  <Star /> 8.5
                </Box>
                <Box display="flex" gap={1} alignItems="center">
                  <RemoveRedEye /> 1200
                </Box>
                <Box display="flex" gap={1} alignItems="center">
                  <Bookmark /> 85
                </Box>
              </Box>
            </Box>
          </Box>

          <Box p={2} display="flex" gap={1}>
            <Box display="flex" gap={1}>
              <Button variant="contained" endIcon={<BookmarkAdd />}>
                IKUTI KOMIK
              </Button>
              <Button variant="contained" endIcon={<Book />}>
                BACA
              </Button>
              <Button variant="contained" endIcon={<Report />}>
                LAPOR
              </Button>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Stack
              direction="row"
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
            >
              {[...Array(10)].map((_, i) => (
                <Chip
                  sx={{ mx: 0.5 }}
                  key={i}
                  label="Action"
                  onClick={() => push("/list/genre")}
                />
              ))}
            </Stack>
          </Box>
        </Box>
      </Paper>
      <Paper
        sx={{
          width: "100%",
          overflowX: "auto",
          my: 2,
          p: 1,
          display: {
            xs: undefined,
            sm: "none",
          },
        }}
      >
        {[...Array(10)].map((_, i) => (
          <Chip
            sx={{ m: 0.5 }}
            key={i}
            label="Action"
            onClick={() => push("/list/genre")}
          />
        ))}
      </Paper>
      <Grid container spacing={1} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={9} xl={10}>
          <Paper sx={{ p: 2 }}>
            <Box display="flex" justifyContent={"space-between"}>
              <Typography variant="h5">Daftar Chapter</Typography>

              <Box display="flex" gap={1}>
                <IconButton
                  color={chapMode == "list" ? "primary" : undefined}
                  onClick={() => setChapMode("list")}
                >
                  <ListAlt />
                </IconButton>
                <IconButton
                  color={chapMode == "grid" ? "primary" : undefined}
                  onClick={() => setChapMode("grid")}
                >
                  <Bento />
                </IconButton>
              </Box>
            </Box>

            {chapMode == "list" ? (
              <List sx={{ maxHeight: 600, overflowY: "auto" }}>
                {chapters.map((e, i) => (
                  <Link key={i} href="/chapter">
                    <a>
                      <ListItem key={i} disablePadding>
                        <ListItemButton>
                          <Box
                            display="flex"
                            justifyContent={"space-between"}
                            width="100%"
                          >
                            <Box display="flex" gap={1} alignItems={"center"}>
                              <RemoveRedEye />
                              <ListItemText primary={e} />
                            </Box>
                            <Box display="flex" gap={1} alignItems={"center"}>
                              <AccessTime />
                              <ListItemText primary="10 minutes ago" />
                            </Box>
                          </Box>
                        </ListItemButton>
                      </ListItem>
                    </a>
                  </Link>
                ))}
              </List>
            ) : (
              <Grid container spacing={2}>
                {chapters.map((e, i) => (
                  <Grid key={i} item xs={6} md={3}>
                    <Link href="/chapter/1">
                      <a>
                        <Paper
                          sx={{
                            p: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <IconButton>
                            <RemoveRedEye />
                          </IconButton>
                          <Typography textAlign="center" variant="body1">
                            {e}
                          </Typography>
                          <IconButton></IconButton>
                        </Paper>
                      </a>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            )}
          </Paper>
        </Grid>

        <Grid item xs={12} sm={3} xl={2}>
          <Paper
            sx={{ p: 2, display: "flex", gap: 2, flexDirection: "column" }}
          >
            <Typography variant="h5">Rekomendasi</Typography>
            <Divider />
            {[...Array(6)].map((_, i) => (
              <ComicCard key={i} type="top" />
            ))}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withRouter(Slug);
