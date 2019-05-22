# 一个cli的例子

使用了`commander`,`download-git-repo`两个包，做了一个简单的示例

拉取目标模板，添加了一个branch的参数，如
`eric-cli -b master`设置一个分支参数

下载的存放目录暂做固定tmp目录，可以做更改

# 本地启动，参数说明

```bash
# -r owner/name
GitHub - github:owner/name or simply owner/name
# -b branch
# -c 即 clone
clone - boolean default false - If true use git clone instead of an http download. While this can be a bit slower, it does allow private repositories to be used if the appropriate SSH keys are setup.
```

```bash
# -r 为github 用户/仓库名
node ./eric-cli.js -r Chaoleer/e-vue-ssr

# 安装后，以下同理
eric-cli -r Chaoleer/e-vue-ssr

# 指定分支
node ./eric-cli.js -r Chaoleer/e-vue-ssr -b develop

# 指定download-git-repo包是否使用clone
node ./eric-cli.js -r Chaoleer/e-vue-ssr -b develop -c

```