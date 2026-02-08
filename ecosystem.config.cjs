module.exports = {
  apps: [
    {
      name: 'adv-collection',
      script: 'bun',
      // We removed '-s' and added '--dotfiles' just in case. 
      // We use the absolute path to the dist folder.
      args: 'x serve -l 7151 /home/arobinson/dev/projects/alexdoesvoices-collection/dist',
      cwd: '/home/arobinson/dev/projects/alexdoesvoices-collection',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
}