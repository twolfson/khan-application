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

# DEV: We could use `npm-run-script` since as of 2.0, it supports variables
#   However, I am more familiar with this at the moment
# Run our release
