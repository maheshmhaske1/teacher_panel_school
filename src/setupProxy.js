const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://66.179.250.128:5000',
      changeOrigin: true,
    })
  );
};
