module.exports = {
  apps: [
    {
      name: 'starlight-docs',
      script: 'serve', 
      env: {
        // Use the absolute path to the dist folder inside your project
        PM2_SERVE_PATH: '/home/arobinson/dev/projects/alexdoesvoices-collection/dist', 
        PM2_SERVE_PORT: 7151,
        PM2_SERVE_SPA: 'true',
        PM2_SERVE_HOMEPAGE: '/index.html'
      }
    }
  ]
}