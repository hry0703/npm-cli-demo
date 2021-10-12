
const { program } = require('commander');
const { version } = require('../package.json');
program.version(version, '-v, --vers', 'output the current version');
module.exports = function cli(){
    program
        // 输入类型选项
        .option('-d, --debug', '表示boolean类型选项')
        .option('-t, --type <type>', '尖括号表示其他类型选项', 'string')  // cli -t number / cli --type=number   string是默认值
        .option('-x, --xyz [value]', '方括号表示无参数则值为boolean ,有参数值为参数',) 
        .option('-c, --cg', 'output extra debugging')
        // cli -r  必须带上-r 可以不填值。默认值为r33
        // .requiredOption('-r, --required', '表示必填选项，必填选项要么设有默认值，要么必须在命令行中输入', 'r33') // { type: 'string', xyz: 'aa', required: true }
        .requiredOption('-y, --yquired <value>', '必填选项，值可以是任意类型','y')  // // { type: 'string', xyz: 'aa', yquired: 'aaa' }
        .option('-z, --zz <type...>', 'output extra debugging')  // { type: 'string', yquired: 'y', zz: [ 'q', 'w', 'er' ], required: 'r' }
        .option('-a, --aa [type...]', 'output extra debugging') 
        // 通过program.parse(arguments)方法处理参数，没有被使用的选项会存放在program.args数组中。该方法的参数是可选的，默认值为process.argv。
        
    program
        .command('clone <source> [destination]', { isDefault: true })
        .description('clone a repository into a newly created directory')
        .action((source, destination) => {
            console.log('clone command called');
        })

    program
        .command('init')
        .description('clone a repository into a newly created directory')
        .argument('<packName>', 'packName',myPackName)  // 
        .argument('[v]', 'packName', 'default-name')
        .action((packName, v) => {
            console.log('init', packName,v);
        })      
        
    program.parse()
        // const options = program.opts();
        // console.log(program.args);   // 
        // console.log(process.argv);
        // console.log(options);
}

function myPackName(name){
    return name + '-'
}