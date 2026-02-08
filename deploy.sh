#!/bin/bash

# 1. Pull latest code (if using Git)
git pull origin master

# 2. Install dependencies (in case you added new ones)
bun install

# 3. Build the SvelteKit project
bun run build

# 4. Restart the app in PM2 to pick up the changes
pm2 restart ecosystem.config.cjs

echo "Deployment complete! Your app is updated."

# Send a Discord Notification
curl -H "Content-Type: application/json" \
     -X POST \
     -d '{"content": "🚀 **Deployment Successful!** AlexDoesVoices-Collection has been updated."}' \
     https://discord.com/api/webhooks/1470172795651625002/RfuOmrzJeRqHays8MGvdsZYx-5baBpgNFdOA7raNt7qm-IdsUfE2YT5zwjyikUZkL6cF