/// <reference types="vite/client" />
declare module 'react-helmet';
declare module 'prismjs';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg';
declare module '*.ico';

interface ImportMetaEnv {
  readonly VITE_BLOG_API_URL: string;
}
