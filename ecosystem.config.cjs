module.exports = {
  apps: [
    {
      name: 'starlight-docs',
      script: 'serve',
      env: {
        // USE THE FULL PATH TO YOUR DIST FOLDER
        PM2_SERVE_PATH: '/home/arobinson/dev/projects/alexdoesvoices-collection/dist', 
        PM2_SERVE_PORT: 7151,
        PM2_SERVE_SPA: 'true',
        PM2_SERVE_HOMEPAGE: '/index.html'
      }
    }
  ]
}