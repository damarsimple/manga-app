import { Box, AppBar, IconButton, Typography, Avatar, Menu, MenuItem, useTheme } from '@mui/material';
import { useContext, useState } from 'react';
import Image from "next/image"
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from '../contexts/ColorMode';
export default function Navbar() {

    const [accountEl, setAccountEl] = useState<Element | null>(null)

    const handleClose = () => {
        setAccountEl(null);
    };

    const theme = useTheme()

    const colorMode = useContext(ColorModeContext)

    return <>
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

    </>
}
