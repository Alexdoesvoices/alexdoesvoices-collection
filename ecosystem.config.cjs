module.exports = {
  apps: [
    {
      name: 'starlight-docs',
      script: 'bun',
      // '-s' is the magic flag that fixes the deep-link (EISDIR) errors
      args: 'x serve -p 7151 -s dist', 
      cwd: '/home/arobinson/dev/projects/alexdoesvoices-collection',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
}