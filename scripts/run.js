const chalk = require('chalk')
const { spawnSync, execFileSync } = require('child_process')

const run = (str, opts = {}) => {
  console.log(chalk.white.bgBlack(str))
  const [ cmd, ...args ] = str.split(' ')
  if (opts.useExec) {
    execFileSync(cmd, args, opts)
  } else {
    const { status } = spawnSync(cmd, args, Object.assign({}, opts, { stdio: 'inherit' }))
    if (status !== 0) process.exit()
  }
}
module.exports = run;
module.exports.run = run;

const lernaExec = (cmd, opts) => run(`lerna exec -- ${cmd}`, opts)

module.exports.lernaExec = lernaExec;
