#!/usr/bin/env sh

# abort on errors
set -e

REPO=git@github.com:SadmanTariq/sadmantariq.github.io.git

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f $REPO master:gh-pages
cd -