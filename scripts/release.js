const { run, lernaExec } = require('./run')

lernaExec(`git pull`)
lernaExec(`npm run preversion`)

run(`lerna publish --skip-npm --skip-git`)
const { version } = require('./lerna.json')

lernaExec(`git commit -am "v${version}"`)
lernaExec(`git tag v${version}`)

lernaExec(`npm publish`)

lernaExec(`git push && git push --tags`)

run(`git commit -am "v${version}"`)
run(`git tag v${version}`)
run(`git push && git push --tags`)
