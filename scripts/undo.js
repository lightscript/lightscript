#!/usr/bin/env node

const { run, lernaExec } = require('./run')

run(`git checkout -- lerna.json`)

// undo docs build
run(`git reset docs`, { cwd: 'lightscript.org' })
run(`git checkout -- docs`, { cwd: 'lightscript.org' })

lernaExec(`git checkout -- package.json`)
