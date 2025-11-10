const config = {
  development: {
    PORT: process.env.PORT || 5001,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/blogapp_dev',
    JWT_SECRET: process.env.JWT_SECRET || 'dev_jwt_secret',
    CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:5173'
  },
  production: {
    PORT: process.env.PORT || 5001,
    MONGODB_URI: process.env.MONGODB_URI_PROD,
    JWT_SECRET: process.env.JWT_SECRET,
    CLIENT_URL: process.env.CLIENT_URL_PROD
  },
  test: {
    PORT: process.env.PORT || 5001,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/blogapp_test',
    JWT_SECRET: 'test_jwt_secret',
    CLIENT_URL: 'http://localhost:5173'
  }
};

const environment = process.env.NODE_ENV || 'development';
module.exports = config[environment];