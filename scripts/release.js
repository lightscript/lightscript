const { run, lernaExec } = require('./run')

try {
  run(`npm whoami`, true)
} catch (err) {
  console.warn('Cannot run as `lerna release`, must run as `npm run release`.')
  process.exit()
}

lernaExec(`git pull`)
lernaExec(`npm run preversion`)

run(`lerna publish --skip-npm --skip-git`)
const { version } = require('../lerna.json')

lernaExec(`git commit -am v${version}`)
lernaExec(`git tag v${version}`)

lernaExec(`npm publish`)

lernaExec(`git push && git push --tags`)

run(`git add packages lerna.json`)
run(`git commit -m v${version}`)
run(`git tag v${version}`)
run(`git push`)
run(`git push --tags`)
