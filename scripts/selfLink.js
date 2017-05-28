#!/usr/bin/env node

const run = require('./run')

process.argv.slice(2).forEach(target => {
  run(`mkdirp ${target}/node_modules`)
  run(`touch ${target}/node_modules/${target}`)
  run(`rm ${target}/node_modules/${target}`)
  run(`ln -s ../../${target} ${target}/node_modules/${target}`)
})
