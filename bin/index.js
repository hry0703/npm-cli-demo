#!/usr/bin/env node
const cli = require("../src");
cli();


// const readline = require("readline");
// const question = ["请输入您的姓名", "请输入您的年龄","请输入您的性别"];
// const result = [];
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     prompt: `？${question[0]} `,// 第一个问题的提示语
// });

// rl.prompt();

// rl.on("line", (line) => {
//     console.log(typeof line)
//     result.push(line.trim());
//     const max = result.length;
//     if (max === question.length) {
//         rl.close();
//     }
//     // 结果数量小于问题数量就接着问
//     rl.setPrompt(`？${question[max]} `);  // 设置提示语  prompt调用时会出现
//     rl.prompt();
// }).on("close", () => {
//     console.log(`谢谢参与问答 *** 姓名: ${result[0]} 年龄: ${result[1]} 性别：${result[2]}`);
//     process.exit(0);
// });


// rl.question('What do you think of Node.js? ', (answer) => {
//     // TODO：记录答案到数据库中
//     console.log(`Thank you for your valuable feedback: ${answer}`);

//     rl.close();
// });