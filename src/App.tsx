import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Blog } from './pages/blogIndex';
import { NotFound } from './pages/notFound';
import { BlogLayout } from './pages/blogLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="blog">
        <Route index={true} element={<Blog />} />
        <Route path=":id" element={<BlogLayout />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
