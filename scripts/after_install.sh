#!/bin/bash
cd /home/ec2-user/my-nest-app

npm install --production

npm run build

# Set proper permissions
chown -R ec2-user:ec2-user /home/ec2-user/my-nest-app