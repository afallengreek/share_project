# 商旅对账详情

`项目路径：act-web/src/components/journeyTrip`

## 主要内容
::: tip 目录结构
      /journeyTrip
          /journeyConfirm -->商旅对账
          /journeySettle -->商旅结算
::: 
::: tip 商旅对账目录结构
               /journeySettle
                   /constData 固定逻辑数据
                       /columns 列表头展示数据
                       /settleJsonData 结算测试假数据
                   /listView
                       /orderList 商旅对账列表
                           /ConfirmList 商旅对账列表
                           /AddSyncDateModal 同步消费者明细功能
                       /ConfirmRequest 商旅对账主页面，对接商旅对账列表（包含我的草稿和已提交结算两个tab）
                       /FeatchUtilsCustom 自定义axios重写，主要改写超时时间（对syncComsumptionsByDate同步数据这个方法使用）
                       /SetInitialDataModal 通过条件创建对账单
                       /SyncAndImportCheckBillModal 同步对账函功能
                   /requestApply 对账申请单
                        /request 主申请内容目录
                            /JourneyConfirmMainForm 对账申请单主界面
                            /OrderHeadForm 对账申请单头部内容
                            /ConfirmDetailCard 对账明细信息卡片（包含宾馆，火车，飞机），分为三个领域 对账成功 对账函差异 消费明细差异
                            /DrawerCard 本次对账移除数据
                            /JsDetailCard 对账单明细
                        /OrderHead 对账申请单头信息，不是头部内容
               /journeySettle -->商旅结算
:::
::: tip 商旅结算目录结构
               /journeySettle
                   /approve 商旅结算
                         /ApproveJsForTax 商旅结算审批修改税金行界面
                         /ApproveJsRequest 商旅结算审批明细界面
                         /ApproveJsRequestEdit 商旅结算审批修改界面
                         /ApproveJsRequestPage 商旅结算外接明细界面
                         /JsRequestDetailPage 商旅结算凭证通过行id查看单据界面
                    /constData 固定逻辑数据
                          /invoiceDetailCol 不合规发票行配置
                          /paymentDetailCol 支付信息行配置
                          /SettleDetailCol 结算卡片明细配置
                   /listView
                          /orderList 商旅结算列表
                                /SettleList 商旅结算列表
                          /SettleRequest 商旅结算主页面，对接商旅结算列表（包含 我的草稿 和 流程处理中 和 所有单据 三个个tab）
                   /requestApply 结算申请单
                          /request 主申请内容目录
                                /JourneySettleMainForm 结算申请单主界面
                                
                                结算申请单主界面包含内容
                                /OrderHeadForm 对账申请单头部内容
                                /TaxRate 税金行进项发票信息
                                /SettleDetailCard 对账明细卡片
                                
                                对账明细卡片包含以下内容
                                /NonCompliantInvoiceDraw  不合规发票登记
                                /DrawerCard 分摊明细
                                /FeeDetailCard 商旅结算单条明细卡片
                                /PaymentDetailCard 支付信息
                          /OrderHead 对账申请单头信息，不是头部内容
               /journeySettle -->商旅结算
:::