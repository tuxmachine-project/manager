#!/bin/bash

cd web;npm i;cd ..

cd desktop-app

npm i && npm run build-web && npm run dist

cd ..