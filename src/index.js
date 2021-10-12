const inquirer = require('inquirer');
const chalk = require('chalk')
const promptList = [{
    type: 'input',
    message: '设置一个用户名:',
    name: 'name',
    default: "test_user" // 默认值
}, {
    type: "list",
    message: "你最喜欢的手机品牌是？",
    choices: [
        { name: '小米', value: 'mi' },
        { name: '华为', value: 'huawei' },
        { name: '苹果', value: 'apple' }
    ],
    name: "fruit"
},{
    type: 'password',
    name: 'pw',
    message: '密码',
},{
    type: 'editor',
    name: 'content',
    message: '内容'
}, {
    type: "confirm",
    message: "是否使用监听？",
    name: "watch",
    prefix: "前缀"
}, {
    type: 'input',
    message: '请输入手机号:',
    name: 'phone',
    when: function (answers) { // 当watch为true的时候才会提问当前问题
        return answers.watch
    },
    // validate: function (val) {
    //     if (val.match(/\d{11}/g)) { // 校验位数
    //         return val;
    //     }
    //     return "请输入11位数字";
    // }
}];
module.exports = function cli() {
    inquirer
        .prompt(promptList)
        .then((answers) => {
            console.log(chalk.bold.blue('Hello World ')  + chalk.bold.red('answers', JSON.stringify(answers)));
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}


// 选择模板 
// 新项目名称
// 项目中的文件夹名 文件中的项目名称替换