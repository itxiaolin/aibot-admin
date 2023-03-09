/**
 * 网站配置文件
 */

const config = {
  appName: 'AI-Bot',
  appLogo: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-gPLPTYToCVqdslUBPhwMmyWZ/user-Im0NKQ70ISSco2JhBcB7ynYy/img-RxLMdnQFg24A79eu3sKoDFZ2.png?st=2023-03-09T05%3A41%3A15Z&se=2023-03-09T07%3A41%3A15Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-03-08T23%3A18%3A41Z&ske=2023-03-09T23%3A18%3A41Z&sks=b&skv=2021-08-06&sig=3VRRYl9SbGlo%2Bv6swFavhuvKt%2B5GLjSosLFGfrsQsZU%3D',
  showViteLogo: true
}

export const viteLogo = (env) => {
  if (config.showViteLogo) {
    const chalk = require('chalk')
    console.log(
      chalk.green(
        `> 欢迎使用Gin-Vue-Admin，开源地址：https://github.com/flipped-aurora/gin-vue-admin`
      )
    )
    console.log(
      chalk.green(
        `> 当前版本:v2.5.5`
      )
    )
    console.log(
      chalk.green(
        `> 加群方式:微信：shouzi_1994 QQ群：622360840`
      )
    )
    console.log(
      chalk.green(
        `> GVA讨论社区：https://support.qq.com/products/371961`
      )
    )
    console.log(
      chalk.green(
        `> 插件市场:https://plugin.gin-vue-admin.com`
      )
    )
    console.log(
      chalk.green(
        `> 默认自动化文档地址:http://127.0.0.1:${env.VITE_SERVER_PORT}/swagger/index.html`
      )
    )
    console.log(
      chalk.green(
        `> 默认前端文件运行地址:http://127.0.0.1:${env.VITE_CLI_PORT}`
      )
    )
    console.log(
      chalk.green(
        `> 如果项目让您获得了收益，希望您能请团队喝杯可乐:https://www.gin-vue-admin.com/coffee/index.html`
      )
    )
    console.log('\n')
  }
}

export default config
