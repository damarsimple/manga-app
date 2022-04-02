import React, { ReactNode, useState } from "react";
import {
  Drawer as MuiDrawer,
  Box,
  CssBaseline,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Icon,
} from "@mui/material";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";

const drawerWidth = 240;



const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));



import dynamic from "next/dynamic";



const Drawer = dynamic(() => import("./StyledDrawer"), { ssr: false })

export default function NavbarAdmin({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(!open)}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/admin/comics">
            <a>
              <Typography variant="h6" noWrap component="div">
                Gudangkomik
              </Typography>
            </a>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={() => setOpen(!open)}>
            <ChevronRightIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            {
              name: "Comic",
              path: "/comics",
              icon: "book",
            },
            {
              name: "Chapter",
              path: "/chapters",
              icon: "library_books",
            },
            {
              name: "Genre",
              path: "/genres",
              icon: "local_offer",
            },
            {
              name: "Author",
              path: "/authors",
              icon: "engineering",
            },
            {
              name: "Ads",
              path: "/ads",
              icon: "feed",
            },
            {
              name: "User",
              path: "/users",
              icon: "face",
            },
            {
              name: "Updater",
              path: "/updater",
              icon: "update",
            },
            {
              name: "Analytics",
              path: "/analytics",
              icon: "trending_up",
            },
            {
              name: "Social",
              path: "/social",
              icon: "question_answer",
            },
            {
              name: "Report",
              path: "/reports",
              icon: "report",
            },
          ].map((route, index) => (
            <Link href={"/admin" + route.path} key={route.path}>
              <a>
                <ListItem button>
                  <ListItemIcon>
                    <Icon>{route.icon}</Icon>
                  </ListItemIcon>
                  {open && <ListItemText primary={route.name} />}
                </ListItem>
              </a>
            </Link>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
