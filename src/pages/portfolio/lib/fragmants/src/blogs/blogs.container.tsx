import React, { PureComponent } from 'react';
import { BlogsComponent } from './blogs.component';
import './styles/blogs.styles.css';

export class BlogsContainer extends PureComponent {
  static onClickCard = (link: string) => {
    window.open(link, '_blank')?.focus();
  };

  render() {
    return <BlogsComponent onClickCard={BlogsContainer.onClickCard} />;
  }
}

