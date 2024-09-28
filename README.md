# 个人简历网站

这是一个使用 Vue.js 构建，使用 cursor 进行开发的个人简历网站。它展示了我的专业经验、技能和个人信息。页面样式参考 [hexo-theme-cosy](https://github.com/17px/hexo-theme-cosy)  大佬。

## 功能

- 信息展示
- 项目经验
- 技能概览
- 教育背景
- 联系方式
- 密码访问

## 技术栈

- Vue.js
- TypeScript
- Vite
- Docker

## 快速开始

### 本地开发

克隆仓库：

```bash
git clone https://github.com/wexuo/vue-cosy-resume.git
cd vue-cosy-resume
```

安装依赖：

```bash
yarn
```

运行：

```bash
yarn dev
```

在浏览器中打开 `http://localhost:5173` 查看网站。

### 使用 Docker 部署

构建 Docker 镜像：

```bash
docker build -t vue-cosy-resume .
```

运行 Docker 容器：

```bash
docker run -d -p 8080:80 -e LOGIN_PASSWORD=your_password_here vue-cosy-resume
```

在浏览器中打开 `http://localhost:8080` 查看网站。

## 密码保护

本网站实现了简单的密码保护功能。要访问简历内容，需要输入正确的密码。

密码通过环境变量 `LOGIN_PASSWORD` 传递。请确保在部署到生产环境之前更改默认密码。


## 自定义

要更新您的简历信息:

1. 编辑 `src/data/resume.ts` 文件以更新您的个人信息、专业经验、技能、教育背景和密码。
2. 如需修改页面布局或样式，可以编辑相应的 Vue 组件文件。

## 贡献

欢迎提出问题和拉取请求。对于重大更改，请先开 issue 讨论您想要更改的内容。

## 关联

- [hexo-theme-cosy](https://github.com/17px/hexo-theme-cosy)

## 许可

[MIT](https://choosealicense.com/licenses/mit/)