const { spawnSync } = require('child_process')

const run = (str) => {
  console.info(`Running "${str}"`)
  const [ cmd, ...args ] = str.split(' ')
  const { status } = spawnSync(cmd, args, { stdio: 'inherit' })
  if (status !== 0) process.exit()
}
module.exports = run;
module.exports.run = run;

const lernaExec = (cmd) => run(`lerna exec -- ${cmd}`)

module.exports.lernaExec = lernaExec;
