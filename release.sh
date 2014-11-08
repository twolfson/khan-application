#!/usr/bin/env bash
# Stop at first error
set -e

# Grab the semver
semver="$1"
if test "$semver" = ""; then
  echo "Semver was not provided to \`release.sh\`. Please provide one" 1>&2
  echo "./release.sh <semver>" 1>&2
  exit 1
fi

# Echo commands
set -x

# Build the latest
./node_modules/.bin/grunt build

# DEV: We could use `npm-run-script` since as of 2.0, it supports variables
#   However, I am more familiar with `bash` for variable passing at the moment
# Run our release
# TODO: Add foundry here
./node_modules/.bin/buildbranch "gh-pages" "dist"

# Open GitHub pages to verify
url="http://twolfson.github.io/khan-application/"
echo "Opening $url"
./node_modules/.bin/opener "$url"
