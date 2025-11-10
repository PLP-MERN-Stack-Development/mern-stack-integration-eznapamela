import { useState } from 'react';
import { postsAPI } from '../services/api';

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await postsAPI.getAll();
      setPosts(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch posts');
    } finally {
      setLoading(false);
    }
  };

  const createPost = async (postData) => {
    try {
      const response = await postsAPI.create(postData);
      setPosts(prev => [response.data, ...prev]);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create post');
      throw err;
    }
  };

  const updatePost = async (id, postData) => {
    try {
      const response = await postsAPI.update(id, postData);
      setPosts(prev => prev.map(post => 
        post._id === id ? response.data : post
      ));
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update post');
      throw err;
    }
  };

  const deletePost = async (id) => {
    try {
      await postsAPI.delete(id);
      setPosts(prev => prev.filter(post => post._id !== id));
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete post');
      throw err;
    }
  };

  return {
    posts,
    loading,
    error,
    fetchPosts,
    createPost,
    updatePost,
    deletePost,
  };
};