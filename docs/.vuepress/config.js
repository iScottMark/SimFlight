module.exports = {
  theme: 'reco',
  title: '模拟飞行',
  // plugins: [

  // ],
  base: '/SimFlight/',
  themeConfig: {
    // reco-theme
    author: '感性的大熊猫',
    subSidebar: 'auto',  //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    // 博客配置
    blogConfig: {
      // category: {
      //   location: 2,     // 在导航栏菜单中所占的位置，默认2
      //   text: 'Category' // 默认文案 “分类”
      // },
      // tag: {
      //   location: 3,     // 在导航栏菜单中所占的位置，默认3
      //   text: 'Tag'      // 默认文案 “标签”
      // },
      socialLinks: [     // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/iScottMark' },
      ]
    },
    
    // default-theme
    nav: [
      { text: '主页', link: '/' },
      { text: '进度', link: '/scheme/' },
    ],
    sidebar: {
      '/scheme/': ['', ],
    },
  },
}