module.exports = {
  base: '/share_project/',
  dest: 'dist',
  title: '项目交接文档',
  description: '项目交接第一版文档',
  themeConfig: {
    editLinks: false,
    docsDir: 'docs',
    nav: [],
    sidebar: [
      {
        title: '长城交接模块概述',
        collapsable: false,
        children: [
          ['changChengMain/', '四个模块主要内容']
        ]
      },
        {
            title: '长城付款模块',
            collapsable: false,
            children: [
                ['changChengPm/', '长城付款模块']
            ]
        },
        {
            title: '长城收款模块',
            collapsable: false,
            children: [
                ['changChengCm/', '长城收款模块']
            ]
        },
        {
            title: '长城资产模块',
            collapsable: false,
            children: [
                ['changChengAm/', '长城资产模块']
            ]
        },
        {
            title: '长城商旅对账',
            collapsable: false,
            children: [
                ['changChengJt/', '长城商旅对账模块']
            ]
        },
      {
          title: '资金交接模块概述',
          collapsable: false,
          children: [
              'fundManageMain/content',
              'fundManageMain/tool',
          ]
      },
      {
        title: '算法',
        collapsable: false,
        children: [
          'algorithm/mountain',
        ]
      }
    ]
  }
}
