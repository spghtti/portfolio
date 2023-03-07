import type { BlogPost } from '../interfaces/BlogPost';

export function fetchPosts(): Promise<BlogPost[]> {
  // For now, consider the data is stored on a static users.json` file
  return (
    fetch('http://localhost:5000/posts')
      // the JSON body is taken from the response
      .then((res) => res.json())
      .then((res) => {
        // The response has an `any` type, so we need to cast
        // it to the `User` type, and return it from the promise
        return res as BlogPost[];
      })
  );
}
