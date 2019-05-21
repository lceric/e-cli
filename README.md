# 一个cli的例子

使用了`commander`,`download-git-repo`两个包，做了一个简单的示例

拉取目标模板，添加了一个branch的参数，如
`e-cli -b master`设置一个分支参数

下载的存放目录暂做固定tmp目录，可以做更改

# 本地启动，参数说明
```bash
# -s 为github路径
node ./e-cli.js -s Chaoleer/e-vue-ssr

# 安装后，以下同理
e-cli -s Chaoleer/e-vue-ssr

# 指定分支
node ./e-cli.js -s Chaoleer/e-vue-ssr -b develop

# 指定download-git-repo包是否使用clone
node ./e-cli.js -s Chaoleer/e-vue-ssr -b develop -c

```