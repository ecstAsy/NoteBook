<h2 align="center">Taro 项目配置 Dva</h2>

### 准备工作

###### _Taro-cli_ 工具安装

使用 npm 安装 cli
>npm install -g @tarojs/cli

使用 yarn 安装 cli
>yarn global add @tarojs/cli

使用 cnpm 安装 cli
>cnpm install -g @tarojs/cli

###### 创建项目模板

>taro init project-name

一定要选择 ***默认模板***

### 安装配置文件

###### 安装 __dva__

>cnpm install --save dva-core dva-loading

- ==dva-core== : 封装了 redux 和 redux-saga的一个插件
- ==dva-loading== : 管理页面的loading状态

###### 安装@tarojs/redux

>cnpm install --save redux @tarojs/redux @tarojs/redux-h5 redux-thunk redux-logger


