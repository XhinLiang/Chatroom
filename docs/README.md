Chat
======
Express 3 和 Socket.io 实现的简易聊天系统。

简陋的界面使用 jQuery 实现。

支持公聊和私聊，支持登陆和断开连接。

### 配置环境

#### 安装 Node.js
[Node.js](https://nodejs.org/en/)
> 建议使用 Node.js 4.4.2 LTS 版本

#### 安装依赖
> 注意，为了避免版本兼容问题，这里直接把 `node_modules` 目录包含了，这个步骤可以忽略

在命令行中执行
```
npm install
```

### 运行服务器
在命令行中执行 `node app.js` 或者直接执行 `npm start`

### 在浏览器中测试
在浏览器中访问 `localhost:3000`
**注意这里使用了 Cookie 功能来实现用户识别用户**
> 在包含 Chrome 在内的一部分浏览器中，重复访问 `localhost:3000/signin` 可以实现多用户登陆

> 如果想进行更充分的测试，可以把服务器架设在公网中，或者直接使用同一局域网中另外的设备通过内网ip进行访问。
