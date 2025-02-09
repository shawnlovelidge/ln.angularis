#!/bin/bash

# Enable alias expansion
shopt -s expand_aliases

source ~/.bash_alias

cd /Volumes/Development/ln.angularis/dist/core
npm link

cd /Volumes/Development/ln.angularis/dist/model
npm link

cd /Volumes/Development/ln.angularis/dist/pipe
npm link

cd /Volumes/Development/ln.angularis/dist/service
npm link

cd /Volumes/Development/ln.angularis/dist/directive
npm link

cd /Volumes/Development/ln.angularis/dist/component
npm link

cd /Volumes/Development/ln.angularis/dist/schematics
npm link

cd /Volumes/Development/ln.angularis

clear

npm-ls

echo $'\nGlobal Symbolic links created...\n'
