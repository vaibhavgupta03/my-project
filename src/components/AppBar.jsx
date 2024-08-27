import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import logo from '../assets/title.png';
import { Link } from 'react-router-dom'; // Ensure you import Link

const pages = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' }
];

const settings = [
  { name: 'GitHub', url: 'https://github.com/vaibhavgupta03' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vaibhavgupta03' },
  { name: 'Twitter', url: 'https://twitter.com/vaibhavgupta090' },
  { name: 'Facebook', url: 'https://facebook.com/vaibhavgupta090' }
];

const ResponsiveAppBar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleToggleDrawer = () => setDrawerOpen(prev => !prev);
  const handleCloseDrawer = () => setDrawerOpen(false);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#1a237e',
        boxShadow: 'none',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        height: '64px',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div"
            sx={{
              textTransform: 'uppercase',
              fontWeight: '700',
              fontFamily: 'Arial, sans-serif',
              letterSpacing: '0.3rem',
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              Vaibhav Gupta
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 2, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleToggleDrawer}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 2,
              display: { xs: 'flex', md: 'none' },
              textTransform: 'uppercase',
              fontWeight: '600',
              fontFamily: 'Arial, sans-serif',
              letterSpacing: '0.35rem',
            }}
          >
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              Vaibhav Gupta
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                color="inherit"
                component={Link}
                to={page.path}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  transition: 'color 0.3s ease-in-out',
                  '&:hover': {
                    color: '#90caf9',
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Tooltip title="Open Profile">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Profile Picture" src={logo} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting.name}
                  onClick={() => window.open(setting.url, '_blank')}
                  sx={{
                    '&:hover': {
                      backgroundColor: '#90caf9',
                      color: '#1a237e',
                    },
                  }}
                >
                  <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleCloseDrawer}
        PaperProps={{
          sx: {
            backgroundColor: '#1a237e',
            color: 'white',
            width: '45%',
            paddingTop: '40px',
          },
        }}
      >
        <List>
          {pages.map((page) => (
            <ListItem
              button
              key={page.name}
              component={Link}
              to={page.path}
              onClick={handleCloseDrawer}
              sx={{
                my: 2,
                color: 'white',
                textAlign: 'center',
                textTransform: 'uppercase',
                fontWeight: '500',
                fontSize: '1.2rem',
                '&:hover': {
                  backgroundColor: '#90caf9',
                  color: '#1a237e',
                },
              }}
            >
              <ListItemText primary={page.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default ResponsiveAppBar;
