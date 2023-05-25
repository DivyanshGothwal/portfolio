import { List, Typography, useTheme } from '@material-ui/core';
import Avatar from '@mui/material/Avatar';
import MuiDrawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { styled } from '@mui/material/styles';
import { sidePannelConstant, WithRouter } from '@portfolio/common';
import React, { useCallback, useEffect, useState } from 'react';
import { MediaQueryProps, withMediaQueries } from '../media-query/media-query.component';
import { withRouter } from '../with-router/with-router.component';
import { SideBarHamBurgerComponent } from './side-bar-ham-burger.component';
import './styles/side-bar-component.styles.css';

const Test = require('../../../static/images/avatar_pic.jpg');

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)(
  ({ theme }) => ({
    width: drawerWidth,
    [theme.breakpoints.down('sm')]: {
      width: 230,
    },
    [theme.breakpoints.up('sm')]: {
      width: 250,
    },
    [theme.breakpoints.up('md')]: {
      width: 250,
    },
    [theme.breakpoints.up('lg')]: {
      width: 260,
    },
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    '& .MuiDrawer-paper': {
      width: 250,
      [theme.breakpoints.down('sm')]: {
        width: 230,
      },
      [theme.breakpoints.up('sm')]: {
        width: 250,
      },
      [theme.breakpoints.up('md')]: {
        width: 250,
      },
      [theme.breakpoints.up('lg')]: {
        width: 260,
      },
    },
  }),
);
const StyledList = styled(List)(({ theme }) => ({
  '&& .Mui-selected, && .Mui-selected:hover': {
    backgroundColor: theme.palette.primary.main,
    '&, & .MuiListItemIcon-root': {
      color: theme.palette.grey[100],
    },
  },
  '&& .MuiListItemButton-root': {
    transition: 'all .4s ease-out !important',
  },
  '& .MuiListItemButton-root:hover': {
    backgroundColor: 'rgba(3,127,255,.2)',
    '&, & .MuiListItemIcon-root': {
      color: theme.palette.primary.main,
    },
  },
}));

type SideBarComponentProps = MediaQueryProps & WithRouter;

function SideBar({
  isExtraLarge,
  router: { navigate, location },
}: SideBarComponentProps) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleDrawerClose = useCallback(() => {
    if (!isExtraLarge) {
      setOpen(!open);
    }
  }, [isExtraLarge, open]);

  const onSideMenuClicked = useCallback((path) => {
    navigate(path);
    setOpen(false);
  }, [navigate]);

  useEffect(() => {
    if (isExtraLarge) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [isExtraLarge]);

  return (
    <>
      {(!isExtraLarge) && (
        <SideBarHamBurgerComponent handleDrawerClose={handleDrawerClose} open={open} />
      )}
      <Drawer
        variant={isExtraLarge ? 'permanent' : 'temporary'}
        open={open}
        keepMounted
        hideBackdrop
        onClose={handleDrawerClose}
        PaperProps={{
          elevation: 2,
          className: 'side-bar__paper',
          classes: {
            root: 'side-bar__paper justify-content-around align-items-center',
          },
        }}
      >
        <div
          className="w-100 border-bottom-solid py-3 d-flex justify-content-center"
        >
          <Avatar
            alt="Divyansh Gothwal"
            src={Test}
            className="border-solid-2 side_drawer__avatar"
          >
            DG
          </Avatar>
        </div>
        <StyledList className="w-100">
          {sidePannelConstant.map(({ id, title, path }) => (
            <ListItem key={id} disablePadding disableGutters>
              <ListItemButton
                selected={location.pathname.includes(path)}
                onClick={() => onSideMenuClicked(path)}
                className="d-flex justify-content-center py-3"
              >
                {title.toUpperCase()}
              </ListItemButton>
            </ListItem>
          ))}
        </StyledList>
        <Typography
          className="w-100 border-top-solid py-2 d-flex justify-content-center"
        >
          © 2023&nbsp;
          <Typography component="span" className="fw-700">
            Divyansh Gothwal
          </Typography>
        </Typography>
      </Drawer>
    </>
  );
}

export const SideBarComponent = withRouter(withMediaQueries(SideBar));
