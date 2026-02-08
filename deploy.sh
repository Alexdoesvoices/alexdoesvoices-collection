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

# # Send a Discord Notification
# curl -H "Content-Type: application/json" \
#      -X POST \
#      -d '{"content": "🚀 **Deployment Successful!** AlexDoesVoices-Collection has been updated."}' \
#     https://discord.com/api/webhooks/1470173396967882897/_CWG0cFP23kr7gQSU9y6Qal6YLFAbeQW1MU5GmTk6c7F7jgtp51ch3hDCkMaWPwxnEq9


echo "The site was successfully deployed at $(date)" | mail -s "Deployment Success" 6628253868@txt.att.net

