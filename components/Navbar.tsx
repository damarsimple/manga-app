import {
  Box,
  AppBar,
  IconButton,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  InputBase,
} from "@mui/material";
import { useContext, useState } from "react";
import Image from "next/image";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useColorMode } from "../stores/colorMode";
import { useNavbarStore } from "../stores/navbar";
import Link from "next/link";
import { TextField } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const [accountEl, setAccountEl] = useState<Element | null>(null);

  const handleClose = () => {
    setAccountEl(null);
  };

  const { setMode, mode, toggle } = useColorMode();
  const { transparent, transparentMode } = useNavbarStore();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          elevation={0}
          position="fixed"
          sx={{
            backgroundColor: transparent ? "transparent" : undefined,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton size="large" edge="start" color="inherit" sx={{ p: 2 }}>
              <Link href="/">
                <a>
                  <Box sx={{ display: { xs: "none", md: "flex" } }}>
                    <Image
                      src="https://gudangkomik.com/img/logo.png"
                      width={250}
                      height={50}
                      alt="logo"
                    />
                  </Box>
                </a>
              </Link>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <Image
                  src="https://gudangkomik.com/android-icon-48x48.png"
                  width={48}
                  height={48}
                  alt="logo"
                />
              </Box>
            </IconButton>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {["Manga", "Manhwa", "Manhua"].map((e) => (
                <Box
                  key={e}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    sx={{ mr: 2 }}
                  >
                    <Typography
                      fontWeight={900}
                      variant="body1"
                      textTransform="uppercase"
                    >
                      {e}
                    </Typography>
                  </IconButton>
                </Box>
              ))}
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Cari Komik.."
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <Box display="flex" alignItems="center" gap={0.2}>
                <IconButton sx={{ ml: 1 }} onClick={toggle} color="inherit">
                  {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
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
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
            }}
          >
            {["Manga", "Manhwa", "Manhua"].map((e) => (
              <Box
                key={e}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  sx={{ mr: 2 }}
                >
                  <Typography
                    fontWeight={900}
                    variant="body1"
                    textTransform="uppercase"
                  >
                    {e}
                  </Typography>
                </IconButton>
              </Box>
            ))}
          </Box>
        </AppBar>
      </Box>
      <Menu
        id="menu-appbar"
        anchorEl={accountEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(accountEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Dashboard</MenuItem>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      {!transparentMode && <Box pt={10} />}
    </>
  );
}
