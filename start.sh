#scp -r /Users/app/code/boke-pc-web root@121.196.178.118:/home/node-service

npm i && npm run build

pm2 start npm --name boke-pc-web -- run start

pm2 logs -f boke-pc-web




