import { defaultTheme } from 'vuepress'

export default {
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '首页lala',
        link: '/',
      },
      {
        text: 'about',
        link: '/views/test/about',
      },
      {
        text: '测试组',
        children: [
          {
            text: '测试组内层1',
            children: [
              {
                text: 'about',
                link: '/views/test/about',
              },
              {
                text: '首页lala',
                link: '/',
              }
            ]
          },
          {
            text: '测试组内层2',
            children: [
              {
                text: 'about',
                link: '/views/test/about',
              },
              {
                text: '首页lala',
                link: '/',
              }
            ]
          }
        ]
      },
    ],
    // Public 文件路径
    logo: '/images/hero.png',
    lastUpdated: true,
    lastUpdatedText: "测试"
  }),
}