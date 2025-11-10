import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import PostList from './components/posts/PostList';
import PostDetail from './components/posts/PostDetail';
import PostForm from './components/posts/PostForm';
import CategoryList from './components/categories/CategoryList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<PostList />} />
          <Route path="posts/create" element={<PostForm />} />
          <Route path="posts/:id" element={<PostDetail />} />
          <Route path="posts/:id/edit" element={<PostForm />} />
          <Route path="categories" element={<CategoryList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;