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
          title: '资金交接模块概述',
          collapsable: false,
          children: [
              ['fundManageMain/', '资金项目主要内容']
          ]
      },
      {
        title: 'TypeScript 常用语法',
        collapsable: false,
        children: [
          'chapter2/type',
          'chapter2/declare',
          'chapter2/interface',
          'chapter2/class',
          'chapter2/function',
          'chapter2/generic',
          'chapter2/inference',
          'chapter2/advance'
        ]
      },
      {
        'title': 'ts-axios 项目初始化',
        collapsable: false,
        children: [
          'chapter3/require',
          'chapter3/init',
          'chapter3/base'
        ]
      },
      {
        'title': 'ts-axios 基础功能实现',
        collapsable: false,
        children: [
          'chapter4/url',
          'chapter4/data',
          'chapter4/header',
          'chapter4/response',
          'chapter4/response-header',
          'chapter4/response-data'
        ]
      },
      {
        'title': 'ts-axios 异常情况处理',
        collapsable: false,
        children: [
          'chapter5/error',
          'chapter5/enhance'
        ]
      }
    ]
  }
}
