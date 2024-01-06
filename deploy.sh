git pull && yarn install && yarn build && pm2 restart ui
pm2 start --name ui "yarn start"