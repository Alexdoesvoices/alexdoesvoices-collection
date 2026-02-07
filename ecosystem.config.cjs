module.exports = {
  apps: [
    {
      name: 'starlight-docs',
      script: 'serve', 
      env: {
        PM2_SERVE_PATH: './dist', // Relative to the project folder
        PM2_SERVE_PORT: 7151,
        PM2_SERVE_SPA: 'true'
      }
    }
  ]
}