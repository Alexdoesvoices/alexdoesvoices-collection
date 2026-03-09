module.exports = {
  apps: [
    {
      name: 'adv-collection',
      script: 'bun',
      // The folder path MUST come before the flags for this version of 'serve'
      args: 'x serve /home/arobinson/dev/projects/alexdoesvoices-collection/dist --listen 7151',
      cwd: '/home/arobinson/dev/projects/alexdoesvoices-collection',
      env: {
        NODE_ENV: 'production'
      },
      // Give the system 3 seconds to breathe on reboot
      restart_delay: 3000,
      // Ensure it doesn't try to use too much memory
      max_memory_restart: '300M'
    }
  ]
}