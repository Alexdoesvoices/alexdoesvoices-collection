module.exports = {
  apps: [
    {
      name: 'starlight-docs',
      // We use 'npx serve' to ensure the serve package is called correctly
      script: 'bunx',
      args: 'serve -p 7151 -s dist',
      cwd: '/home/arobinson/dev/projects/alexdoesvoices-collection',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
}