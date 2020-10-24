# 资金项目工具

## 单据模板   
`路径：..src/components/CommonRequest`

包含单据列表，列表和中装页以及新增，修改，编辑，保存，提交流程等单据公共功能。
并为单据提供默认的样式。
## 公共行管理工具  
`路径：..src/components/RowWrapper`

为单据行提供增删改查的功能，并且对行操作可扩建提供多个参数功能控制。
并为单据行提供默认的样式。
## 附件管理工具    
`路径：..src/components/UploadFile`

附件管理工具兼容了`3.0`版本和`6.0`版本的附件操作，对附件的新增修改上传等逻辑统一在
组件里处理完成，外界只需要传一个`id`找到绑定的附件，和获取方法获取当前的附件信息。
## 高级查询组件   
`路径：..src/components/AdvancedSearch`

高级查询组件提供了兼容标准的行查询使用`标准行项目映射文件StardFormItems`
配置出`Form.item`接入ued样式的组件查询的方案。
## 查看台账预警工具  
`路径：..src/components/Hooks/UseLedgerDetail`

通过该工具包裹的组件具有拦截路由信息，如果路由上存在isDetail参数，
则隐藏操作列，并显示预警数据。
## 查看关联单工具 
`路径：..src/components/LinkRequestHook`

该工具内部提供一个内置的`iframe`可以控制是否打开新的`iframe`展示关联
申请单的信息。通过包裹该工具，我们可以通过他提供的函数传入跳转路由
轻松打开新`iframe`查看申请信息
## 公共税率计算配置
`路径：..src/components/RateItemConfig`

该工具提供税率`Form.item`的内部的交互逻辑，只需要传入定制的值就可以得到
标准的税率相关的`Form.item`表单
## 标准行项目映射文件 
`路径：..src/components/StardFormItems`

`StardFormItems`为我们包装了`Col`的存在，并对接好了`antd design`组件
库常用的`Form.item`，和suid平台的组件。并预设了很多样式和参数方便我们操作
`Form.item`单个对象。
## 行样式管理工具 
`路径：..src/components/StardFormItems/FormRowWrapperNew`

`FormRowWrapperNew`提供了可以将`Col`组件自动计算并动态布局变化的方案。
并能为它包裹的所有行项目提供公共属性如`isDetail`等。