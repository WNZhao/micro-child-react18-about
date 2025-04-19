# micro-child-react18-about

基于 React 18 的微前端子应用，支持独立运行和作为子应用运行。

## 项目结构

```
micro-child-react18-about/
├── public/                 # 静态资源目录
├── src/                    # 源代码目录
│   ├── components/         # 公共组件
│   │   └── Layout/        # 布局组件
│   ├── pages/             # 页面组件
│   │   └── About/         # 关于页面
│   ├── styles/            # 样式文件
│   │   └── global.scss    # 全局样式
│   ├── utils/             # 工具函数
│   │   └── request.js     # 请求封装
│   ├── App.js             # 应用入口组件
│   ├── index.js           # 应用入口文件
│   └── public-path.js     # 微前端环境配置
├── .env                    # 环境变量
├── package.json           # 项目依赖配置
└── README.md              # 项目说明文档
```

## 功能特性

- 支持独立运行和作为微前端子应用运行
- 基于 React 18 开发
- 使用 SCSS 进行样式管理
- 封装 Axios 请求工具
- 支持环境变量配置

## 关键实现

### 微前端适配

1. 通过 `public-path.js` 配置 webpack publicPath，支持独立运行和微前端环境
2. 使用 `window.__MICRO_APP_ENVIRONMENT__` 判断运行环境
3. 支持 qiankun 微前端框架

### 请求封装

1. 基于 Axios 封装请求工具
2. 支持请求/响应拦截
3. 统一的错误处理
4. 支持 token 认证

### 样式管理

1. 使用 SCSS 预处理器
2. 模块化的样式组织
3. 全局样式统一管理

## 开发指南

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm start
```

### 构建生产版本

```bash
npm run build
```

## 环境变量

- `REACT_APP_API_URL`: API 基础地址
- `REACT_APP_PUBLIC_PATH`: 公共路径

## 注意事项

1. 确保主应用已正确配置微前端环境
2. 子应用需要配置正确的 publicPath
3. 注意样式隔离和冲突处理

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
