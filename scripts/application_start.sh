#!/bin/bash
cd /home/ec2-user/my-nest-app

# Start the application with PM2
pm2 start dist/main.js --name "my-nest-app" -i max

# Configure PM2 to start on system boot
pm2 startup