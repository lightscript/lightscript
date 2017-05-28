#!/usr/bin/env node

const run = require('./run')

process.argv.slice(2).forEach(target => {
  run(`mkdirp packages/${target}/node_modules`)
  run(`touch packages/${target}/node_modules/${target}`)
  run(`rm packages/${target}/node_modules/${target}`)
  run(`ln -s ../../${target} packages/${target}/node_modules/${target}`)
})
