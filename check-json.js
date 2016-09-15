const readFileSync = require('fs').readFileSync

const json = readFileSync('coverage/coverage-final.json')

try {
    JSON.parse(json)
    console.info('Coverage is valid JSON!')
} catch (err) {
    console.error('Coverage is not valid JSON!', err)
    process.exit(1)
}