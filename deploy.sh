#!/usr/bin/env sh

# abort on errors
set -e

REPO=git@github.com:SadmanTariq/sadmantariq.github.io.git
BRANCH=gh-pages

if [ ! -d 'dist/.git' ]; then
    if [ -d 'dist' ]; then
        # if folder already exists then delete it
        rm -r 'dist'
    fi

    # if repo doesnt exist then clone it
    git clone "$REPO" -b "$BRANCH" 'dist'
fi

# build
npm run build

# navigate into the build output directory
cd dist

git add -A
git commit -m 'deploy'

git push
cd -