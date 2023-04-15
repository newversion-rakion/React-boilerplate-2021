import React, { useState } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import mainLogo from 'images/customIcons/main-logo.png';
// eslint-disable-next-line import/no-unresolved
import logo from 'images/vector.svg';
import userIcon from 'images/customIcons/user-icon.png';
import { useStyles } from '../../static/MiniDrawerStyles';
import { staticMenu } from '../../static/Menus';
import ListItemLinkContainer from '../ListItemLinkContainer';
import HeaderStyle from './MiniDrawerStyle';

function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { openSideBar, handlerSideBar } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [setLogoutDialogOpen] = useState(false);

  return (
    <React.Fragment>
      <CssBaseline />
      <HeaderStyle>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: openSideBar,
          })}
        >
          <Toolbar className="toolBar">
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handlerSideBar}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: openSideBar,
              })}
            >
              <MenuIcon style={{ color: '#2E323A' }} />
            </IconButton>
            <div className="mainHeaderLeft">
              <div className="logoBox">
                <img src={mainLogo} alt="" />
              </div>
            </div>
            <div className="mainHeaderRight">
              <div>
                <button
                  type="button"
                  className="userBtn"
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <span>
                    {localStorage.getItem('user_info') &&
                      `${JSON.parse(localStorage.user_info).custom_id}`}
                  </span>
                  <img src={userIcon} alt="" />
                </button>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  className="wrapHeaderMenu"
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <div className="divider" />
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      setLogoutDialogOpen(true);
                    }}
                  >
                    <i className="fas fa-sign-out-alt fa-sm fa-fw" />
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: openSideBar,
            [classes.drawerClose]: !openSideBar,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: openSideBar,
              [classes.drawerClose]: !openSideBar,
            }),
          }}
          open={openSideBar}
        >
          <div className={classes.toolbar}>
            <div className="logo">
              <img src={logo} alt="" />
              <span>Indochina</span>
            </div>

            <IconButton style={{ color: 'white' }} onClick={handlerSideBar}>
              {theme.direction === 'rtl' ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>

          <Divider />
          <nav className={classes.lists}>
            <List>
              {staticMenu.map((menu, index) => (
                <React.Fragment key={index}>
                  <ListItemLinkContainer menuObj={menu} />
                </React.Fragment>
              ))}
            </List>
          </nav>
          <Divider />
        </Drawer>
      </HeaderStyle>
    </React.Fragment>
  );
}

export default MiniDrawer;
