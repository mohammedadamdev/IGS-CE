import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useTheme } from "@mui/material";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthenticationLogics } from "../Utils/AuthenticationLogics";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import { settings } from "../constants";
const pages = ["Properties", "Buy/Sell", "Contact Us"];

function ResponsiveAppBar() {
  const role = localStorage.getItem("role");
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const { handleClick } = AuthenticationLogics();
  const theme = useTheme();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const loginStatus = useSelector((state: any) => state.LoginSlice.isLoggedIn);
  return (
    <div
      style={{
        display: isLoggedIn === "true" ? "block" : "none",
      }}
    >
      <AppBar
        position="static"
        sx={{
          height: 60,
          backgroundColor: theme.palette.primary.main,
          justifyContent: "center",
          margin: "22px auto",
          width: "96%",
          borderRadius: "15px",
        }}
      >
        <Container maxWidth="xl" sx={{ flexGrow: 1 }}>
          <Toolbar disableGutters>
            <MapsHomeWorkIcon
              sx={{
                fontSize: "2rem",
                display: { xs: "none", md: "flex" },
                mr: 1,
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/home"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Poppins",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Property Hub
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                mr: 1,
                justifyContent: "flex-end",
                display: { xs: "none", md: "flex" },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={page.toLowerCase()}
                  sx={{
                    fontFamily: "Poppins",
                    my: 2,
                    color: "white",
                    display: "block",
                    textTransform: "none",
                  }}
                >
                  {page}
                </Button>
              ))}
              <div style={{ margin: "20px" }}>
                <Badge badgeContent={4} color="error">
                  <Button
                    key="requests"
                    component={Link}
                    to="/requests"
                    onClick={handleCloseNavMenu}
                    sx={{
                      "&:hover": {
                        backgroundColor: theme.palette.info.main,
                      },
                      fontFamily: "Poppins",
                      borderRadius: "12px",
                      display: "block",
                      textTransform: "none",
                      boxShadow: `0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)`,
                      color: theme.palette.primary.main,
                      backgroundColor: theme.palette.info.main,
                    }}
                  >
                    Requests
                  </Button>
                </Badge>
              </div>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting.name}
                    onClick={() => {
                      handleClick(setting.name);
                      handleCloseUserMenu();
                    }}
                    sx={{
                      display:
                        role === "tenent" && setting.name === "Users"
                          ? "none"
                          : "",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "inherit",
                        textDecoration: "none",
                      }}
                      textAlign="center"
                    >
                      {setting.label}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default ResponsiveAppBar;
