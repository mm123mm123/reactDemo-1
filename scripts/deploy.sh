#!/usr/bin/env bash
yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@github.com:mm123mm123/-reactDemo-1-deploy.git &&
git push -u origin master -f
cd -