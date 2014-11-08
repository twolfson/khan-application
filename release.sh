#!/usr/bin/env bash
# Stop at first error and echo commands
set -e
set -x

# Grab the semver
semver="$1"
echo "$semver"

# DEV: We could use `npm-run-script` since as of 2.0, it supports variables
#   However, I am more familiar with this at the moment
# Run our release
