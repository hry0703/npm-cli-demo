# cli

npm cache clean --force

CLI 工具的基本能力就是要解析用户输入的 CLI 命令与参数，实现相关功能。Node 的 process.argv 数组包含了 Node 进程被启动时传入的命令行参数，通过解析 process.argv 数组即可，社区中相关的 Package 也比较多，如：commander,yargs,minimist

commander 是一个较为完善的 Node CLI 解决方案，拥有解析输入参数、关联处理逻辑、输出命令提示等功能。只有当 commander 的功能无法满足你的需求时，才建议你尝试自己处理命令参数解析。

交互输入： inquirer、 enquirer 、prompts
输出美化： chalk、 kleur、ink、figlet
加载动画：ora
基本解析：meow 、 arg
参数解析：commander 、yargs
操作命令行
sindresorhus/ansi-escapes
输出截断
sindresorhus/cli-truncate