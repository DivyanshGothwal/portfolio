import { IconButton, Paper } from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import React, { PureComponent } from 'react';

interface SideBarHamBurgerComponentProps {
  handleDrawerClose: () => void;
  open: boolean;
}

export class SideBarHamBurgerComponent extends PureComponent<SideBarHamBurgerComponentProps> {
  render() {
    const { open, handleDrawerClose } = this.props;
    return (
      <Paper
        square
        className={`${open ? 'side-bar-ham-burger__transform-right' : 'side-bar-ham-burger__transform-left'} position-fixed side-bar-ham-burger__transition-button side-bar__paper`}
        elevation={2}

      >
        <IconButton onClick={handleDrawerClose}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Paper>
    );
  }
}
