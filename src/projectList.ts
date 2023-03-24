import Project from './interfaces/Project';

export const projectOne: Project = {
  title: 'Blog API + CMS',
  description:
    'A blog API for my portfolio and CMS for writing and editing posts. Features rich a rich text editor and user commenting.',
  stack: ['Mongo', 'Express', 'React', 'Node', 'Typescript'],
  github_link: 'https://github.com/spghtti/blog-api',
  live_link: '/blog',
  image: 'blog.png',
};

export const projectTwo: Project = {
  title: 'Reactr',
  description:
    "A Tumblr clone. Create an account, submit posts, like and comment on other posts, and see what's trending.",
  stack: ['React', 'Firestore', 'Firebase Auth'],
  github_link: 'https://github.com/spghtti/reactr',
  live_link: 'https://reactr-2cec5.web.app/',
  image: 'reactr.png',
};

export const projectThree: Project = {
  title: 'WASD',
  description:
    "A CRUD application to track a (fictional) mechanical keyboard store's inventory.",
  stack: ['MongoDB', 'Express', 'Node'],
  github_link: 'https://github.com/spghtti/keyboard-inventory-app',
  live_link:
    'https://keyboard-inventory-app-production.up.railway.app/inventory',
  image: 'wasd.png',
};

export const projectFour: Project = {
  title: 'ufoundme',
  description:
    "A Where's-Waldo-like photo tagging game where you compete against others for the best time.",
  stack: ['React', 'Firestore'],
  github_link: 'https://github.com/spghtti/ufoundme',
  live_link: 'https://foundme-spghtti.web.app/',
  image: 'ufoundme.png',
};
