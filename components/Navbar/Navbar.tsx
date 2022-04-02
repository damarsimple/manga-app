/* eslint-disable @next/next/no-img-element */
import {
  Box,
  AppBar,
  IconButton,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  InputBase,
  Paper,
  Skeleton,
  Divider,
  Button,
  ListItemIcon,
  ListItemText,
  MenuList,
  Modal,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useContext, useState } from "react";
import Image from "next/image";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useColorMode } from "../../stores/colorMode";
import { useNavbarStore } from "../../stores/navbar";
import Link from "next/link";
import { styled, alpha } from "@mui/material/styles";

import SearchIcon from "@mui/icons-material/Search";
import { ComicSearch } from "../../types";
import { gql, useQuery } from "@apollo/client";
import { useR18 } from "../../stores/r18";
import { useRouter } from "next/router";
import { dontRender } from "../../modules/rules";
import { client } from "../../modules/client";
import { event } from "../../modules/gtag";
import { useUserStore } from "../../stores/user";
import {
  AdminPanelSettings,
  AccountCircle,
  Dashboard,
  Logout,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import * as Yup from "yup";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { useLoginModalStore } from "../../stores/loginModal";

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

interface LoginValue {
  email: string;
  password: string;
}

export default function Navbar() {
  const { push, pathname } = useRouter();
  const [accountEl, setAccountEl] = useState<Element | null>(null);

  const [focused, setFocused] = useState(false);

  const handleClose = () => {
    setAccountEl(null);
  };

  const { mode: hMode } = useR18();

  const [comicSearch, setComicSearch] = useState<ComicSearch | undefined>(
    undefined
  );

  const [loading, setLoading] = useState(false);

  const [timer, setTimer] = useState<null | NodeJS.Timer>(null);

  const handleSearch = (query: string) => {
    if (query.length < 3) return;
    setComicSearch(undefined);
    setLoading(true);

    timer && clearTimeout(timer);

    const newTimer = setTimeout(() => {
      client
        .query<{
          comicSearch: ComicSearch;
        }>({
          query: gql`
            query ComicSearchNavbar(
              $query: String!
              $offset: Int
              $limit: Int
              $type: String
              $allowHentai: Boolean
            ) {
              comicSearch(
                query: $query
                offset: $offset
                limit: $limit
                type: $type
                allowHentai: $allowHentai
              ) {
                comics {
                  id
                  name
                  slug
                  thumb
                  type
                  thumbWide
                }
                offset
                limit
                processingTimeMs
                total
                exhaustiveNbHits
              }
            }
          `,
          variables: {
            query: `${query}`,
            limit: 5,
            allowHentai: hMode,
          },
          fetchPolicy: "network-only",
        })
        .then(({ data }) => {
          const { comicSearch } = data;
          setLoading(false);
          setComicSearch(comicSearch);

          event({
            action: "search",
            category: "navbar",
            label: query,
            value: comicSearch?.processingTimeMs ?? 0,
          });
        });
    }, 150);

    setTimer(newTimer);
  };

  const { setMode, mode, toggle } = useColorMode();
  const { transparent, transparentMode } = useNavbarStore();

  const { user, login, logout } = useUserStore();

  const { showLoginModal, setShowLoginModal } = useLoginModalStore();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const showLogin = () => {
    setShowLoginModal(true);
  };

  const hideLogin = () => {
    setShowLoginModal(false);
    setError("");
    setShowPassword(false);
  };

  const handleError = (err: Error) => {
    setError(`${err.message}`);
  };

  if (dontRender.some((r) => r.test(pathname))) return <></>;

  return (
    <>
      <Modal open={showLoginModal} onClose={() => hideLogin()}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box display="flex" justifyContent={"flex-end"}>
            <Button onClick={() => hideLogin()}>x</Button>
          </Box>
          <Formik<LoginValue>
            validationSchema={Yup.object({
              email: Yup.string().required(),
              password: Yup.string().required(),
            })}
            initialValues={{ email: "", password: "" }}
            onSubmit={(data) =>
              login(data.email, data.password)
                .then(() => {
                  hideLogin();
                  toast.success("Berhasil terautentikasi !", {
                    position: "bottom-right",
                  });
                })
                .catch(handleError)
            }
          >
            {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
              <Box my={4} gap={3} display="flex" flexDirection="column">
                <TextField
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <IconButton>
                        <AccountCircle />
                      </IconButton>
                    ),
                  }}
                  label="Email"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  helperText={errors.email}
                  error={!!errors.email}
                  value={values.email}
                  type="email"
                />
                <TextField
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    ),
                  }}
                  label="Password"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  helperText={errors.password}
                  error={!!errors.password}
                  value={values.password}
                />
                <Typography color={"error"} component="p" variant="body2">
                  {error}
                </Typography>

                <Button
                  type="submit"
                  onClick={() => handleSubmit()}
                  fullWidth
                  variant="contained"
                >
                  masuk
                </Button>
              </Box>
            )}
          </Formik>
        </Box>
      </Modal>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          elevation={0}
          position="fixed"
          sx={{
            color: mode == "dark" ? "white" : "black",
            backgroundColor: transparent
              ? "transparent"
              : mode == "dark"
              ? "#1e1e1e"
              : "white",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton size="large" edge="start" color="inherit" sx={{ p: 2 }}>
              <Link href="/">
                <a>
                  <Box sx={{ display: { xs: "none", md: "flex" } }}>
                    <Image src="/logo.png" width={250} height={50} alt="logo" />
                  </Box>
                </a>
              </Link>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <Link href="/">
                  <a>
                    <Image
                      src="/android-icon-48x48.png"
                      width={48}
                      height={48}
                      alt="logo"
                    />
                  </a>
                </Link>
              </Box>
            </IconButton>
            <Box
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
            >
              {["Manga", "Manhwa", "Manhua"].map((e) => (
                <Link key={e} href={`/list/comic/${e.toLowerCase()}`}>
                  <a>
                    <Box
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
                          variant={"h5"}
                          sx={{
                            // whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            lineClamp: 4,
                            fontWeight: "bold",
                            fontSize: {
                              xs: "1rem",
                              sm: "1.3rem",
                            },
                          }}
                        >
                          {e.toUpperCase()}
                        </Typography>
                      </IconButton>
                    </Box>
                  </a>
                </Link>
              ))}
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <form autoComplete="off" method="GET" action="/list/comic/search">
                <Box position="relative">
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>

                    <StyledInputBase
                      placeholder="Cari Komik.."
                      inputProps={{ "aria-label": "search" }}
                      name="q"
                      sx={{ border: 0.5, borderRadius: 2 }}
                      onChange={(e) => handleSearch(e.target.value)}
                      onFocus={() => setFocused(true)}
                      onBlur={() => setTimeout(() => setFocused(false), 200)}
                    />
                  </Search>
                  <Box
                    sx={{
                      position: "absolute",
                      zIndex: 99,
                      width: "100%",
                    }}
                  >
                    {loading && (
                      <Paper
                        sx={{
                          display: "flex",
                          gap: 1,
                          p: 1,
                        }}
                      >
                        <Skeleton width={40} height={60} />
                        <Box width="100%">
                          <Skeleton height={30} variant="text" width={"100%"} />
                          <Skeleton height={30} variant="text" width={"100%"} />
                        </Box>
                      </Paper>
                    )}
                    {focused &&
                      comicSearch?.comics?.map((e) => (
                        <Link href={"/comic/" + e.slug} key={e.id}>
                          <a
                            onClick={() => {
                              event({
                                action: "view_search_results",
                                label: e.slug,
                                category: e.type,
                              });
                            }}
                          >
                            <Paper
                              sx={{
                                display: "flex",
                                gap: 1,
                                p: 1,
                                ":hover": {
                                  backgroundColor: "lightgray",
                                },
                              }}
                              onClick={() => push("/comic/" + e.slug)}
                            >
                              <Image
                                alt={e.name}
                                src={`${e.thumb}?width=40&height=60`}
                                width={40}
                                height={60}
                              />
                              <Box>
                                <Typography variant="body1">
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: e.name,
                                    }}
                                  />
                                </Typography>
                              </Box>
                            </Paper>
                          </a>
                        </Link>
                      ))}
                  </Box>
                </Box>
              </form>
              <Box display="flex" alignItems="center" gap={0.2}>
                <IconButton sx={{ ml: 1 }} onClick={toggle} color="inherit">
                  {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
                {user ? (
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    sx={{ mr: 2 }}
                    onClick={(e) => setAccountEl(e.currentTarget)}
                  >
                    <Avatar
                      alt={user.name ?? ""}
                      sx={{ width: 32, height: 32 }}
                    />
                  </IconButton>
                ) : (
                  <Button onClick={showLogin}>Login</Button>
                )}
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
            }}
          >
            {["Manga", "Manhwa", "Manhua"].map((e) => (
              <Link key={e} href={`/list/comic/${e.toLowerCase()}`}>
                <a>
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
                </a>
              </Link>
            ))}
          </Box>
        </AppBar>
      </Box>
      <Menu
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
        <MenuList>
          <MenuItem onClick={() => push("/dashboard")}>
            <ListItemIcon>
              <Dashboard fontSize="small" />
            </ListItemIcon>
            <ListItemText>Dashboard</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => push("/dashboard/profile")}>
            <ListItemIcon>
              <AccountCircle fontSize="small" />
            </ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </MenuItem>
          {user?.isAdmin && (
            <MenuItem onClick={() => push("/admin")}>
              <ListItemIcon>
                <AdminPanelSettings fontSize="small" />
              </ListItemIcon>
              <ListItemText>Admin</ListItemText>
            </MenuItem>
          )}
          <Divider />
          <MenuItem
            onClick={() => {
              logout();
              handleClose();
            }}
          >
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
      {!transparentMode && (
        <Box
          pt={{
            xs: 20,
            md: 10,
            lg: 12,
          }}
        />
      )}
    </>
  );
}
