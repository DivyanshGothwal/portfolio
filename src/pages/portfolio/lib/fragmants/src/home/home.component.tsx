import { IconButton, Typography } from '@material-ui/core';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Grid from '@mui/material/Grid';
import { Particle } from '@portfolio/component';
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

interface HomeComponentProp {
  onClickFacebook: () =>void;
  onClickTwitter: () =>void;
  onClickGithub: () =>void;
  onClickLinkedIn: () =>void;
}

export class HomeComponent extends PureComponent<HomeComponentProp> {
  render() {
    const { onClickFacebook, onClickTwitter, onClickGithub, onClickLinkedIn } = this.props;
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
              <div className="">
                <Typography variant="h3" className="fw-700 animate__animated  animate__zoomInDown  text-align-center" gutterBottom>
                  Hi, I am&nbsp;
                  <Typography variant="h3" component="span" color="primary" className="fw-700">
                    Divyansh Gothwal
                  </Typography>
                </Typography>
                <Typography className="text-align-center animate__animated animate__zoomInDown">
                  Passionate full-stack engineer with 5.5+ years of hands-on
                  experience in developing scalable websites/applications using
                  wide range of front-end and back-end skills like HTML, CSS3, JAVA, JavaScript.
                  Developed 8+ application in my experience.
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <IconButton
                onClick={onClickFacebook}
                className="animate__animated animate__fadeInUp"
              >
                <FacebookOutlinedIcon
                  color="primary"
                  fontSize="large"
                />
              </IconButton>
              <IconButton
                onClick={onClickTwitter}
                className="animate__animated animate__fadeInUp"
              >
                <TwitterIcon
                  color="primary"
                  fontSize="large"
                />
              </IconButton>
              <IconButton
                onClick={onClickGithub}
                className="animate__animated animate__fadeInUp"
              >
                <GitHubIcon
                  color="primary"
                  fontSize="large"
                />
              </IconButton>
              <IconButton
                onClick={onClickLinkedIn}
                className="animate__animated animate__fadeInUp"
              >
                <LinkedInIcon
                  color="primary"
                  fontSize="large"
                />
              </IconButton>
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}
