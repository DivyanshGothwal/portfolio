
import { colors, Divider, Typography } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CustomGrid, HeaderComponent } from '@portfolio/component';
import React from 'react';
import { services } from './constants/about.constants';
import './styles/about.component.styles.css';

const Test = require('../../../../../../static/images/about_pic.jpg');

export function ServicesComponent() {
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
          text="Services"
          progressBar={{
            value: 50,
          }}
          classes={{
            root: ' pt-6 mt-6',
          }}
        />
      </CustomGrid>

      {services.map(({ text, Icon }) => (
        <CustomGrid
          item
          lg={4}
          xl={4}
          md={6}
          sm={6}
          xs={12}
          key={text}
        >
          <Card
            className="py-2 mb-2 mr-2 about_component__service__card_container"
            style={{
              background: colors.grey?.[200],
            }}
            square
          >
            <CardContent>
              <Icon color="primary" fontSize="large" />
              <Typography gutterBottom variant="h5" className="fw-600 mb-3">
                {text}
              </Typography>
              <Divider className="mb-3 w-20" />
              <Typography variant="body2" color="textSecondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </CustomGrid>
      ))}
    </CustomGrid>
  );
}
