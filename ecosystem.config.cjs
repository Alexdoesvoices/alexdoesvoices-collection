module.exports = {
  apps: [
    {
      name: 'starlight-docs',
      // This tells PM2 to act as a web server for your build folder
      script: 'serve',
      env: {
        PM2_SERVE_PATH: './dist',
        PM2_SERVE_PORT: 7151,
        PM2_SERVE_SPA: 'true',
        PM2_SERVE_HOMEPAGE: '/index.html'
      }
    }
  ]
}