import { IconButton, Typography } from '@material-ui/core';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import Grid from '@mui/material/Grid';
import { MediaQueryProps, Particle, withMediaQueries } from '@portfolio/component';
import React, { PureComponent } from 'react';
import type { ISourceOptions } from 'tsparticles-engine';

const particleOptions: ISourceOptions = {
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: 'push',
      },
      onHover: {
        enable: false,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: '#555555',
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: false,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: {
        min: 1, max: 5,
      },
    },
  },
  detectRetina: true,
};

type HomeComponentProp = MediaQueryProps;

class Component extends PureComponent<HomeComponentProp> {
  render() {
    const { isSmall } = this.props;
    return (
      <>
        <Particle
          options={particleOptions}
          id="home-page-particle"
        />
        <div
          className="d-flex align-items-center w-100"
        >
          <Grid container>
            <Grid
              item
              lg={10}
              md={8}
              sm={8}
              xs={10}
              className="m-auto d-flex flex-column align-items-center justify-content-center"
            >
              <Typography variant="h3" className="fw-700  text-align-center" gutterBottom>
                Hi, I am&nbsp;
                <Typography variant="h3" component="span" color="primary" className="fw-700">
                  Divyansh Gothwal
                </Typography>
              </Typography>
              <Typography className="text-align-center">
                I am a frontend web developer. I can provide clean code and pixel perfect design.
                I also make website more & more interactive with web animations.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <IconButton>
                <FacebookOutlinedIcon
                  color="primary"
                  fontSize="large"
                // fontSize={`${isSmall ? 'inherit' : 'large'}`}
                />
              </IconButton>
              <IconButton>
                <TwitterIcon color="primary" fontSize="large" />
              </IconButton>
              <IconButton>
                <GitHubIcon color="primary" fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

export const HomeComponent = withMediaQueries(Component);
