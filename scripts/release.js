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
const { version, packages } = require('../lerna.json')
const versionStr = `v${version}`

lernaExec(`git commit -am v${version}`)
lernaExec(`git tag ${versionStr} -m ${versionStr}`)

lernaExec(`npm publish`)

lernaExec(`git push && git push --tags`)

run(`git add ${packages.join(' ')} lerna.json`)
run(`git commit -m ${versionStr}`)
run(`git tag ${versionStr} -m ${versionStr}`)
run(`git push`)
run(`git push --tags`)
