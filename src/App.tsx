import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Blog } from './pages/blogIndex';
import { NotFound } from './pages/notFound';
import { BlogLayout } from './pages/blogLayout';
import { Contact } from './pages/contact';
import { Login } from './pages/login';
import { Logout } from './pages/logout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="blog">
        <Route index={true} element={<Blog />} />
        <Route path=":id" element={<BlogLayout />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
