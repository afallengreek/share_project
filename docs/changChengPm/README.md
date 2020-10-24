# 付款模块
`项目路径：bdm-web/src/components/pm`

## 主要内容
  ::: tip 目录结构
         /pm
            /naturePayment -->付款性质
            /paymentAccount -->付款记账配置
            /paymentPool -->付款挂账池
            /print -->打印定制（应客户要求对海外付款申请单做定制的打印页面，可以选择可以打印的海外付款申请单打印，在页签`所有单据`的付款申请单打印是打印另一个东西）
            /repayRequest -->付款申请单
            /repayRequestForContract -->付款申请
            /TaxRateType -->税金行项目配置
  ::: 
## 申请单主要逻辑
 ::: tip 流程页面目录结构
    /pm/repayRequest
       /approve 
             /ApprovePmDetailPage   流程明细界面，兼容信用证付款的明细
             /ApprovePmRequest      付款单审批明细页面
             /ApprovePmRequestEdit  付款单审批编辑页面
             /ApprovePmRequestEditPage 付款单外接编辑页面
             /ApprovePmRequestForBill  付款单审批编辑发票页面
             /ApprovePmRequestForBookBalance 付款单审批编辑账面余额页面
             /ApprovePmRequestForBookBalance 付款单审批编辑账面余额和扣缴税金页面
             /ApprovePmRequestForContract 付款单审批编辑合同信息页面
             /ApprovePmRequestForCostMoney 付款单审批编辑扣缴税金页面
             /ApprovePmRequestPage 付款单审批编辑页面
             /ApprovePmRequestPageForCreditEditPage 付款单审批编辑页面 （为信用证付款定制）
             /ApprovePmRequestPageForCreditPage 付款单审批明细页面 （为信用证付款定制）
             /ApprovePmRequestPageForCreditEditPage 付款单外接编辑页面 （为信用证付款定制）
             /ApprovePmRequestPageForCreditPage 付款单外接明细页面 （为信用证付款定制）
             /ApprovePmRequestPageForCreditPage 凭证查看申请单，处理行id找到单据id查找到单据 （兼容信用证付款）
 ::: 
 ::: tip 申请单主内容目录结构
     /pm/repayRequest
        /index -->list页面，包含了 我的草稿，流程处理中，所有单据三个tab页签
        /orderList -->主内容文件夹（从进入list到做单顺序排列和真实排列顺序不一致）
             /RepayList list页面，供最外层的index页签传入参数展示不同的页面内容
             /PmAddOrEditPage  付款申请单核心控制页面，传递参数，切换中转和单据页面
             
             核心控制界面主要包含下面两个页面
             /RequestHeadForm  付款申请单中转页（注意：实际位置在repayRequest目录下面） 
             /OrderForm  付款申请单主要内容
             
             付款申请单主要内容页面主要包含以下内容
             /OrderHead 付款申请单单据头（注意：实际位置在repayRequest目录下面） 
             /NormalPaymentRequestItem 根据参数分配的人民币付款单据行项目
             /ForeignCurrencyPaymentItem 根据参数分配的海外付款单据行项目
             /SpecialPaymentRequestItem 根据参数分配的特殊付款单据行项目
             /BatchImportPaymentRequestItem 根据参数分配的批量付款单据行项目
             
             其他
             /PaymentChoosePrintModal 付款单选择打印Modal,为pm中的print对接使用
             /FileForm 附件
        /OrderHead 付款申请单单据头   
        /RequestHeadForm  付款申请单中转页     
  ::: 
   ::: tip 付款申请单内容页OrderForm下主要api和组件
       /pm/repayRequest/OrderForm
         api
         function getFormData() 获取主要内容的内容用以保存
         function getInitData() 解析findOneVo的参数分发给各个组件
         function personDataModalOk() 对接选择对象付款的回调函数，回调后会把选中的对象生成付款行
         function getJsonData() 解析批导付款申请单导入的数据，批导逻辑处理在这层
         function handleExportPm() 导出当前页的数据供修改后再导回来(批导申请单专用)
         
         component
         <AddPersonModal/> 新增付款对象（员工）组件
         <AddOnceModal/> 新增付款对象（一次性供应商）组件
         <AddSupplierModal/> 新增付款对象（供应商）组件
         <AddCustomerModal/> 新增付款对象（客户）组件
         <NormalPaymentRequestItem/> 根据参数分配的人民币付款单据行项目组件
            <AddPaymentModal/> 为支付行添加支付信息
            <ShowModal/>  为支付行添加挂账行信息
            <AddOrFreeMoney/> 为支付行占用或者释放挂账金额
            <AddBankModal/> 为支付行添加银行信息
         <ForeignCurrencyPaymentItem/> 根据参数分配的海外付款单据行项目组件
            <AddOrFreeMoney/> 为支付行添加扣缴税金
            <AddPaymentModal/> 为支付行添加支付信息
            <EditTaxModal/> 为支付行添加扣缴税金
            <AddOrFreeMoney/> 为支付行占用或者释放挂账金额
            <AddBankModal/> 为支付行添加银行信息
         <SpecialPaymentRequestItem/> 根据参数分配的特殊付款单据行项目组件
             <AddPaymentModal/> 为支付行添加支付信息
             <AddBankModal/> 为支付行添加银行信息
         <BatchImportPaymentRequestItem/> 根据参数分配的批量付款单据行项目组件
 ::: 
 
 