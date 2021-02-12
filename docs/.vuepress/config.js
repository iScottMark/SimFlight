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