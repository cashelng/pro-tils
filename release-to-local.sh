#!/usr/bin/env bash

set -e

# Build and copy files into another repository

echo Running yarn build
yarn build > /dev/null

export DEST="`realpath $1`/node_modules/@cashelng/pro-tils"
echo Removing $DEST/dist

rm -rf "$DEST/dist"

mkdir -p $DEST

echo Copying dist to $DEST/dist
cp -r ./dist "$DEST/dist"

echo Copying package.json to $DEST/package.json
cp ./package.json "$DEST/package.json"
echo Copying yarn.lock to $DEST/yarn.lock
cp ./yarn.lock "$DEST/yarn.lock"

echo Running yarn install
cd $DEST
yarn install --production=true >& /dev/null
