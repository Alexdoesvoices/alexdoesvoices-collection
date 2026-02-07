module.exports = {
  apps: [
    {
      name: 'starlight-docs',
      script: 'serve', 
      env: {
        PM2_SERVE_PATH: '/home/arobinson/dev/projects/alexdoesvoices-collection/dist', 
        PM2_SERVE_PORT: 7151,
        PM2_SERVE_SPA: 'true',
        // THIS TELLS PM2 HOW TO RESOLVE DIRECTORIES
        PM2_SERVE_HOMEPAGE: '/index.html' 
      }
    }
  ]
}