import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { CustomGrid, HeaderComponent } from '@portfolio/component';
import React, { PureComponent } from 'react';
import { blogs } from './constants/blogs.constants';

interface BlogComponentProps {
  onClickCard: (link: string) => void;
}

export class BlogsComponent extends PureComponent<BlogComponentProps> {
  render() {
    const { onClickCard } = this.props;
    return (
      <CustomGrid
        container
        className="component__container mx-auto justify-content-center mb-5"
      >
        <CustomGrid
          item
          xs={12}
        >
          <HeaderComponent
            text="My Blogs"
            progressBar={{
              value: 50,
            }}
            classes={{
              root: 'pt-6 mt-6',
            }}
          />
        </CustomGrid>
        <CustomGrid container>
          {blogs.map(({ heading, imageUrl, link, postedOn: { date, year, month }, content }) => (
            <CustomGrid
              item
              lg={6}
              xl={6}
              md={6}
              sm={12}
              xs={12}
              key={content}
              className="cursor-pointer"
            >
              <Card
                className="blogs_component__card_container"
                square
                onClick={() => onClickCard(link)}
              >
                <CardMedia
                  component="img"
                  image={imageUrl}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="caption" component="div">
                    {date}
                    -
                    {month}
                    -
                    {year}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    className="fw-600 text-overflow-ellipsis white-space-nowrap overflow-hidden"
                    title={heading}
                  >
                    {heading}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-overflow-ellipsis white-space-nowrap overflow-hidden"
                    title={content}
                  >
                    {content}
                  </Typography>
                </CardContent>
              </Card>
            </CustomGrid>
          ))}
        </CustomGrid>
      </CustomGrid>
    );
  }
}

