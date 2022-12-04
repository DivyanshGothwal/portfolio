import { Button, Typography } from '@material-ui/core';
import { CustomGrid, HeaderComponent, MediaQueryProps, withMediaQueries } from '@portfolio/component';
import React from 'react';

const Test = require('../../../../../../static/images/about_pic.jpg');

type InfoComponentProps = MediaQueryProps;

function Component({ isLarge, isExtraLarge }: InfoComponentProps) {
  return (
    <CustomGrid
      container
      className="w-100"
    >
      <CustomGrid
        item
        xs={12}
      >
        <HeaderComponent
          text="About me"
          progressBar={{
            value: 50,
          }}
          classes={{
            root: 'pt-6 mt-6 animate__fadeInDown animate__animated ',
          }}
        />
      </CustomGrid>
      <CustomGrid
        item
        lg={6}
        xl={6}
        md={12}
        sm={12}
        xs={12}
      >
        <img src={Test} alt="DG" width="100%" />
      </CustomGrid>
      <CustomGrid
        item
        lg={6}
        xl={6}
        md={12}
        sm={12}
        xs={12}
        className={`${isLarge || isExtraLarge ? 'pl-3' : ''} mb-3 `}
      >
        <CustomGrid className="mb-3">
          <Typography variant="h4" gutterBottom className="fw-600">
            I am&nbsp;
            <Typography variant="h4" component="span" color="primary" className="fw-600">
              Divyansh Gothwal
            </Typography>
          </Typography>
          <Typography>
            Passionate full-stack engineer with 5.5+ years of hands-on
            experience in developing scalable websites/applications using
            wide range of front-end and back-end skills like HTML, CSS3, JAVA, JavaScript.
            Developed 8+ application in my experience.
          </Typography>
        </CustomGrid>
        <CustomGrid className="mb-2 d-flex">
          <Typography variant="subtitle1" className="fw-700 about_component__info_text">
            Full Name
          </Typography>

          <Typography component="span" className="">
            <b>: </b>
            Divyansh Gothwal
          </Typography>
        </CustomGrid>
        <CustomGrid className="mb-2 d-flex">
          <Typography variant="subtitle1" className="fw-700 about_component__info_text">
            Age
          </Typography>
          <Typography component="span">
            <b>: </b>
            28 Years
          </Typography>
        </CustomGrid>
        <CustomGrid className="mb-2 d-flex">
          <Typography variant="subtitle1" className="fw-700 about_component__info_text">
            Nationality
          </Typography>
          <Typography component="span" className="">
            <b>: </b>
            Indian
          </Typography>
        </CustomGrid>
        <CustomGrid className="mb-2 d-flex">
          <Typography variant="subtitle1" className="fw-700 about_component__info_text">
            Languages
          </Typography>
          <Typography component="span" className="">
            <b>: </b>
            English, Hindi
          </Typography>
        </CustomGrid>
        <CustomGrid className="mb-2 d-flex">
          <Typography variant="subtitle1" className="fw-700 about_component__info_text">
            Address
          </Typography>
          <Typography component="span" className="">
            <b>: </b>
            Bengaluru, India
          </Typography>
        </CustomGrid>
        <CustomGrid className="mb-2 d-flex mb-3">
          <Typography variant="subtitle1" className="fw-700 about_component__info_text">
            Freelance
          </Typography>
          <Typography component="span" className="">
            <b>: </b>
            Available
          </Typography>
        </CustomGrid>
        <Button variant="outlined" color="primary">
          Download CV
        </Button>
      </CustomGrid>
    </CustomGrid>
  );
}

export const InfoComponent = withMediaQueries(Component);
