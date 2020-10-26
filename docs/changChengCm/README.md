# 收款详情
`项目路径：bdm-web/src/components/cm`
## 主要内容
  ::: tip 目录结构
         /cm
            /approve -->收款申请单流程页面（本应该放在收款申请单目录里）
            /collectionAccount -->收款记账配置
            /collectionDetail -->收款认领明细
            /collectionType -->收款款项配置
            /reCollectionRequest -->收款申请单
  ::: 
## 申请单主要逻辑
   ::: tip 流程页面目录结构
      /cm/approve 
               /ApproveReCollectionRequest          收款单审批明细页面
               /ApproveReCollectionEditRequest      收款单审批编辑页面
               /ApproveReCollectionRequestEditPage  收款单外接编辑页面
               /ApproveReCollectionRequestPage      收款单外接明细页面
   ::: 
   
   ::: tip 申请单主内容目录结构
        /pm/reCollectionRequest
           /index -->list页面，包含了 我的草稿，流程处理中，所有单据三个tab页签
           /orderList -->主内容文件夹（从进入list到做单顺序排列和真实排列顺序不一致）
                /RepayList list页面，供最外层的index页签传入参数展示不同的页面内容
                /CpAddOrEditPage  收款款申请单核心控制页面，传递参数，切换中转和单据页面
                
                核心控制界面主要包含下面两个页面
                /RequestHeadForm  付款申请单中转页（注意：实际位置在repayRequest目录下面） 
                /OrderForm  付款申请单主要内容
                
                付款申请单主要内容页面主要包含以下内容
                /OrderHead 付款申请单单据头（注意：实际位置在repayRequest目录下面） 
                /ReturnPersonCard 收款申请单行项目
                
                其他
                /FileForm 附件
           /OrderHead 付款申请单单据头   
           /RequestHeadForm  付款申请单中转页     
   ::: 
     
::: tip 收款申请单内容页OrderForm下主要api和组件
            /pm/reCollectionRequest/OrderForm
              api
              function getFormData() 获取主要内容的内容用以保存
              function getInitData() 解析findOneVo的参数分发给各个组件
              function personDataModalOk() 对接选择对象付款的回调函数，回调后会把选中的对象生成收款行
              
              component
              <AddPersonModal/> 新增付款对象（员工）组件
              <AddOnceModal/> 新增付款对象（一次性供应商）组件
              <AddSupplierModal/> 新增付款对象（供应商）组件
              <AddCustomerModal/> 新增付款对象（客户）组件
              <ReturnPersonCard/> 根据参数分配的人民币付款单据行项目组件
::: 
  
  