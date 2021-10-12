// const viteProject = require('@hrylerna/vite-project');
const package = require('./package.json')
const testFn = (a)=>{
    console.log('hrynpm1',a)
    console.log('version', package.version)
}
// viteProject()
module.exports = testFn