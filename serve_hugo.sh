#!/bin/sh

set -e

set -a 
[ -f .env ] && source .env 
set +a

echo "Running: \`hugo serve -D $*\`"
hugo serve -D $*

