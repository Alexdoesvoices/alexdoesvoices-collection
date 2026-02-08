module.exports = {
  apps: [
    {
      name: 'starlight-docs',
      script: 'bun',
      // We use -l for the listen address/port and -s for SPA mode
      args: 'x serve -l 7151 -s dist', 
      cwd: '/home/arobinson/dev/projects/alexdoesvoices-collection',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
}