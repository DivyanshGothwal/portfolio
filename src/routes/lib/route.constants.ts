export const routeConstant = {
  initialHome: {
    id: 'portfolio',
    path: 'portfolio',
    title: 'Divyansh Gothwal',
  },
  home: {
    id: 'home',
    path: 'home',
    title: 'Home',
  },
  about: {
    id: 'about',
    path: 'about',
    title: 'About',
  },
  resume: {
    id: 'resume',
    path: 'resume',
    title: 'Resume',
  },
  // projects: {
  //   id: 'projects',
  //   path: 'projects',
  //   title: 'Projects',
  // },
  blogs: {
    id: 'blogs',
    path: 'blogs',
    title: 'Blogs',
  },
  contact: {
    id: 'contact',
    path: 'contact',
    title: 'Contact Me',
  },
  default: {
    id: 'default',
    path: '*',
    title: 'Home',
    to: 'home',
    redirect: true,
  },
};
