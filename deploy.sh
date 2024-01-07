git pull && yarn install && yarn build && pm2 restart ui
yarn build && pm2 start --name ui "yarn start"