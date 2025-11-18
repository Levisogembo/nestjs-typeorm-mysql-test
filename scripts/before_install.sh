
#!/bin/bash
cd /home/ec2-user/my-nest-app
if [ -f /home/ec2-user/.pm2/pid ]; then
    pm2 stop all
    pm2 delete all
fi

# Backup current deployment (optional)
if [ -d "/home/ec2-user/my-nest-app" ]; then
    tar -czf /home/ec2-user/backup-$(date +%Y%m%d-%H%M%S).tar.gz /home/ec2-user/my-nest-app
fi

# Cleanup destination directory
rm -rf /home/ec2-user/my-nest-app/*