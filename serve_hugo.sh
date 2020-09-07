#!/bin/sh

set -e

set -a 
[ -f .env ] && source .env 
set +a

hugo serve -D
