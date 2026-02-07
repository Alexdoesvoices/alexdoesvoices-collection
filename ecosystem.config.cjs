module.exports = {
  apps: [
    {
      name: 'starlight-docs',
      // We use Bun's built-in static server
      script: 'bun',
      args: 'run serve --port 7151 --dir dist',
      cwd: '/home/arobinson/dev/projects/alexdoesvoices-collection',
      interpreter: 'none', // Prevents PM2 from trying to use Node
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
}