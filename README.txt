gwpGrape
July 15, 2021 updated 1 Feb 2023
based on gwpDragonfruit and gwpEggplant and gwpFig

Lenovo
cd ~/AAA_GatWldFlwr/gwpGrape
expo --version   6.2.1
cd gwpGrape

To Run in browser
------
expo start OR yarn start

To backup
---------
cd ~/AAA_GatWldFlwr/gwpGrape
tar -pczf ../gwpGrape_008.tar.gz --exclude=./.git/* --exclude=./assets/gwp/images*/* --exclude=./node_modules/* --exclude=./.expo/* --exclude=./web-*/* --exclude=./yarn.lock --exclude=./yarn-error.log .

To build for web (localhost or primordion.com)
----------------
???
- toggle "homepage": "/gwp" line in package.json
cd ~/AAA_GatWldFlwr/Expo/Snack/gwpFig
expo build:web
- builds directory web-build in gwpFig
