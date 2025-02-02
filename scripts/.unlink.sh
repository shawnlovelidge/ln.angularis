#!/bin/bash

# Enable alias expansion
shopt -s expand_aliases

source ~/.bash_alias

cd /Volumes/Development/ln.lernender.com

npm unlink -g @angularis/component
npm unlink -g @angularis/directive
npm unlink -g @angularis/service
npm unlink -g @angularis/pipe
npm unlink -g @angularis/model
npm unlink -g @angularis/core

clear

npm-ls

echo $'\nGlobal Symbolic links removed...\n'



