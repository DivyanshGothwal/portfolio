import React, { PureComponent } from 'react';
import { BlogsComponent } from './blogs.component';
import './styles/blogs.styles.css';

class Container extends PureComponent {
  render() {
    return <BlogsComponent />;
  }
}

export const BlogsContainer = Container;
