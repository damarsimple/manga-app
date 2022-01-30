/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Paper,
  IconButton,
  Typography,
  Button,
  Container,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import { WithRouterProps } from "next/dist/client/with-router";
import { withRouter } from "next/router";
import React from "react";
import { useState } from "react";
import {
  ChangeCircle,
  NavigateBefore,
  NavigateNext,
  Report,
  SkipPrevious,
} from "@mui/icons-material";
function Id({}: WithRouterProps) {
  const [readMode, setReadMode] = useState<"single" | "longstrip">("single");
  const [imageIndex, setImageIndex] = useState(0);
  const Navigation = () =>
    readMode == "single" ? (
      <Paper sx={{ mb: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton>
            <NavigateBefore />
          </IconButton>
          <Box>1/21</Box>
          <IconButton>
            <NavigateNext />
          </IconButton>
        </Box>
      </Paper>
    ) : (
      <></>
    );

  const Header = () => (
    <Paper sx={{ mb: 1 }}>
      <Box>
        <Typography textAlign={"center"} variant="h6" textTransform="uppercase">
          Naruto
        </Typography>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1,
          }}
        >
          <IconButton>
            <NavigateBefore />
          </IconButton>
          {/* <Typography
              textAlign={"center"}
              variant="body1"
              textTransform="uppercase"
            >
              Chapter 10
            </Typography> */}

          <FormControl fullWidth>
            <Select
              value={1}
              // onChange={handleChange}
              size="small"
            >
              <MenuItem value={1}>Chapter 10</MenuItem>
            </Select>
          </FormControl>
          <IconButton>
            <NavigateNext />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
  return (
    <Container>
      <Header />
      <Navigation />

      <Paper sx={{ mb: 1 }}>
        {readMode === "single" ? (
          <img
            src="https://cdn.gudangkomik.com/tokyorevengers/239/1.jpg"
            alt="comic"
            height={"100%"}
            width={"100%"}
            onClick={(e) => {
              //@ts-ignore
              var x = e.pageX - e.target.offsetLeft;
              //@ts-ignore
              alert(x < e.target.width / 2 ? "Left" : "Right");
            }}
          />
        ) : (
          <>
            {[...Array(10)].map((_, i) => (
              <img
                key={i}
                src="https://cdn.gudangkomik.com/tokyorevengers/239/1.jpg"
                alt="comic"
                height={"100%"}
                width={"100%"}
                onClick={(e) => {
                  //@ts-ignore
                  var x = e.pageX - e.target.offsetLeft;
                  //@ts-ignore
                  alert(x < e.target.width / 2 ? "Left" : "Right");
                }}
              />
            ))}
          </>
        )}
      </Paper>

      <Navigation />
      <Header />
      <Paper sx={{ mb: 1, p: 1, display: "flex", gap: 1 }}>
        <Button variant="contained" endIcon={<Report />}>
          LAPOR
        </Button>
        <Button
          variant="contained"
          endIcon={<ChangeCircle />}
          onClick={() =>
            setReadMode(readMode === "single" ? "longstrip" : "single")
          }
        >
          UBAH MODE BACA
        </Button>
      </Paper>
    </Container>
  );
}

export default withRouter(Id);
