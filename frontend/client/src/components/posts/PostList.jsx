import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePosts } from '../../hooks/usePosts';
import LoadingSpinner from '../common/LoadingSpinner';

const PostList = () => {
  const { posts, loading, error, fetchPosts } = usePosts();

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <LoadingSpinner text="Loading posts..." />;
  
  if (error) return (
    <div className="container">
      <div className="error-message">
        <strong>Error:</strong> {error}
      </div>
    </div>
  );

  return (
    <div className="container fade-in">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">All Posts</h1>
          <p className="text-gray-200">Discover amazing content from our community</p>
        </div>
        <Link
          to="/posts/create"
          className="btn btn-primary"
        >
          ✏️ Create New Post
        </Link>
      </div>

      <div className="posts-grid">
        {posts.map((post) => (
          <div
            key={post._id}
            className="post-card card-hover"
          >
            <div className="post-content">
              <h2 className="post-title">
                <Link to={`/posts/${post._id}`}>
                  {post.title}
                </Link>
              </h2>
              
              <p className="post-excerpt">
                {post.content}
              </p>
              
              <div className="post-meta">
                <span className="post-date">
                  {new Date(post.createdAt).toLocaleDateString()}
                </span>
                {post.category && (
                  <span className="post-category">
                    {post.category.name}
                  </span>
                )}
              </div>
              
              <div className="flex gap-3 mt-4">
                <Link
                  to={`/posts/${post._id}`}
                  className="btn btn-outline"
                  style={{padding: '0.5rem 1rem', fontSize: '0.875rem'}}
                >
                  Read More
                </Link>
                <Link
                  to={`/posts/${post._id}/edit`}
                  className="btn btn-success"
                  style={{padding: '0.5rem 1rem', fontSize: '0.875rem'}}
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="empty-state">
          <div className="empty-state-icon">📝</div>
          <h3 className="empty-state-title">No posts yet</h3>
          <p className="empty-state-description">
            Be the first to create an amazing blog post!
          </p>
          <Link to="/posts/create" className="btn btn-primary">
            Create First Post
          </Link>
        </div>
      )}
    </div>
  );
};

export default PostList;