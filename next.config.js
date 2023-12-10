// next.config.js

module.exports = {
    webpack: (config, { isServer }) => {
      // Add your webpack configurations here
  
      // Example: Resolve 'path' module for both client and server
      config.resolve.fallback = {
        ...config.resolve.fallback,
        path: false,
      };
  
      return config;
    },
  };
  