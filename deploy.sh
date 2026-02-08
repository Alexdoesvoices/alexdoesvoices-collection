#!/bin/bash

# Move into the project directory
cd /home/arobinson/dev/projects/alexdoesvoices-collection/

# 1. Force-Sync with GitHub (The Fix for the 'reset' issue)
# This fetches the latest and overwrites local changes/permissions
git fetch origin master
git reset --hard origin/master
git clean -fd

# 2. Install dependencies
# Using --frozen-lockfile is faster and safer for deployments
bun install

# 3. Build the project
bun run build

# 4. Restart the app in PM2
pm2 restart ecosystem.config.cjs

# 5. Notifications
# SMS Notification (Ensure s-nail is installed)
echo "AlexDoesVoices-Collection deployed at $(date)" | mail -s "Deploy" 6628253868@txt.att.net

# Optional: Uncomment this if you want to turn on Discord again
# curl -H "Content-Type: application/json" -X POST -d '{"content": "🚀 **Deployment Successful!**"}' https://discord.com/api/webhooks/1470173396967882897/_CWG0cFP23kr7gQSU9y6Qal6YLFAbeQW1MU5GmTk6c7F7jgtp51ch3hDCkMaWPwxnEq9

echo "Deployment complete! Your app is updated."