import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/posts', label: 'All Posts', icon: '📚' },
    { path: '/posts/create', label: 'Create Post', icon: '✏️' },
    { path: '/categories', label: 'Categories', icon: '🗂️' },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="nav-brand">
            BlogApp
          </Link>
          
          <div className="flex gap-2 nav-links">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;