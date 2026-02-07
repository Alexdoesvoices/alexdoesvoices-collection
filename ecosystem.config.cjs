module.exports = {
  apps: [
    {
      name: 'starlight-docs',
      script: 'bun',
      // We force the address to 127.0.0.1 and use the absolute path for the directory
      args: 'x serve --port 7151 --address 127.0.0.1 /home/arobinson/dev/projects/alexdoesvoices-collection/dist',
      cwd: '/home/arobinson/dev/projects/alexdoesvoices-collection',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
}