// 如果没有通过拦截器配置域名的话，可以在这里写上完整的URL(加上域名部分)
// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
// url定义时的接口名应该与方法名相同，避免由于接口数过多无法查询到接口
// url定义规则，接口名+Url
// 方法定义规则
// 接口名
// 登陆接口
let loginUrl = '/login';
// 退出登录
let logoutUrl = '/logout'
// 短信登陆接口
let smsLoginUrl = '/smsLogin'
// 发送登陆验证码接口
let sendLoginSmsUrl = '/sendLoginsms'
// 提交注册信息
let registerUrl = '/user/regist'
// 发送注册短信
let sendRegisterSmsUrl = '/user/sendRegistsms'
// 发送忘记密码验证码
let sendForgetPwdCodeUrl = '/user/sendRepasswdsms'
// 忘记密码短信验证码校验
let checkChangeCodeUrl = '/user/smsYzm'
// 提交新密码
let changPwdUrl = '/user/repasswd'
// 发送添加邮箱验证码
let sendEmailSmsUrl = 'user/sendemailsms'
// 添加邮箱
let addEmailUrl = '/user/addEmailentity'
// 获取用户
let getUserInFoUrl = '/user/userInfo'
// 提交认证信息
let idNoRecognizeUrl = '/idNo/idNoRecognize'
// 修改手机号短信
let changePhoneSmsUrl = '/user/sendOldPhonesendesms'
// 更新手机号
let updataPhoneUrl = '/user/updatePhoneentity'
// 修改手机号验证码校验
let updataPhoneSmsCheckUrl = '/user/updateOldPhonesendesms'
// 获取到首页项目信息
let getPorjectListUrl = '/project/listProject'
//查询发票抬头
let selectInvoiceTitleUrl = '/receipt/header/list'
// 添加发票抬头
let addInvoiceTitleUrl = '/receipt/header/add'
// 查询开票记录
let selectInvoiceRecordUrl = '/receipt/record/list'
//查询可开具发票项目
let selectInvoiceProjectUrl = '/receipt/item/queryByIds'
//删除发票
let deleteInvoiceUrl = '/receipt/header/del'
//查询发票项目列表 
let seleceInvoiceProjectListUrl = '/receipt/item/list'
//电子发票记录添加
let elcInvoiceUrl = '/receipt/record/add'
// 查询发票审核
let selectInvoiceUserUrl = '/receipt/selectReceiptUser'
// 发票页数
let selectListRecordPageUrl = '/receipt/listRecordPage'
// 发票详情
let selectInvoiceDetailUrl= '/receipt/record/detail'
// 项目合同列表
let selectProjectAgreementListUrl='/project/agreement/list'
//项目合同所有列表
let selectAllProjectAgreementListUrl = '/project/agreement/listByUserId'
//查看合同
let selectAgreementByIdUrl = '/project/agreement/queryById'
//添加合同
let addAgreementUrl = '/project/agreement/add'
//修改合同
let updateAgreementUrl = '/project/agreement/update'
//签订合同
let signAgreementUrl = '/project/agreement/sign'
//拒绝合同
let refuseAgreementUrl ='/project/agreement/refuse'
// 项目进度添加
let addProjectProcessUrl = '/projectProcess/add'
//项目进度检查
let checckProjectProcessUrl = '/projectProcess/check'
//关闭项目进度
let closeProjectProcessUrl ='/projectProcess/close'
//确认项目进度
let confirmProjectProcessUrl = '/projectProcess/confirm'
//评价项目进度
let evaluateProjectProcessUrl ='/projectProcess/evaluate'
//项目进度阶段列表
let projectProcessListUrl = '/projectProcess/list'
//重新提交项目进度
let reAddProjectProcessUrl = '/projectProcess/reAdd'
//拒绝项目进度阶段
let refuseProjectProcessUrl = '/projectProcess/refuse'
//提交项目进度
let submitProjectProcessUrl = '/projectProcess/submit'
//查询项目阶段数
let selectPhaseCountUrl = '/projectPhase/countProjectPhase'
//删除项目阶段
let deletePhaseUrl = '/projectPhase/deleteProjectPhase'
// 查询项目阶段信息
let selectPhaseUrl='/projectPhase/findProjectPhase'
//保存项目阶段信息
let savePhaseUrl= '/projectPhase/saveProjectPhase'
//更新项目阶段信息
let updatePhaseUrl = '/projectPhase/updateProjectPhase'
//项目参与者单个项目查询
let findProjectManProjectUrl = '/projectMan/findOneProject'
//未审核项目分页查询
let findtManAllProjectUrl = '/projectMan/findProject'
//qq
let findManProjectApplyUrl = '/projectMan/findProjectApply'
//分页查询所有审核记录
let findManProjectAuditUrl='/projectMan/findProjectAudit'
//审核过的项目分页查询
let findManProjectPassUrl = '/projectMan/findProjectPass'
//qw
let updateManProjectUrl ='/projectMan/updateProject'
//opp
let updateManProjectProcessUrl = '/projectMan/updateProjectProcess'


//头像修改
let updateAvatarUrl = '/user/profile'
//查询用户评论
let selectEstimateUrl = '/estimate/findEstimate'
//获取用户评论总数
let selectEstimateCountUrl = '/estimate/getEstimatesCount'
//查询id评论
let findOneEstimateUrl = '/estimate/findOneEstimate'
//修改用户评论
let updateEstimatesUrl = '/estimate/updateEstimates'
//删除用户评论
let deleteEstimatesUrl = '/estimate/deleteEstimates'

// 查询工作经历
let selectFindWorkUrl = '/work/findWork'
// 保存工作经历
let saveWorkUrl = '/work/saveWork'
// 修改工作经历
let findOneWorkUrl = '/work/findOneWork'
// 删除工作经历
let deleteWorkUrl = '/work/deleteWork'
// 修改后保存工作经历
let updateWorkUrl = '/work/updateWork'
// 查询擅长技能
let selectFindSkillsUrl = '/skills/findSkills'
// 保存擅长技能
let saveSkillsUrl = '/skills/saveSkills'
// 查询个人介绍
let selectFindPersonalUrl = '/user/findPersonal'
// 修改个人介绍
let updataPersonalUrl = '/user/personal'
// 查询教育经历
let selectFindEducationalUrl = '/educational/findEducational'
// 查询单个教育经历
let findOneEducationalUrl = '/educational/findOneEducational'
// 添加教育经历
let saveEducationalUrl = '/educational/saveEducational'
// 删除教育经历
let deleteEducationalUrl = '/educational/deleteEducational'
// 查询项目案例
let findProjectEditorUrl = '/projectEditor/findProjectEditor'
// 查询单个项目案例
let findOneProjectEditorUrl = '/projectEditor/findOneProjectEditor'
// 修改项目案例
let updateProjectEditorUrl = '/projectEditor/updateProjectEditor'
// 保存项目案例
let saveProjectEditorUrl = '/projectEditor/saveProjectEditor'
// 删除项目案例
let deleteProjectEditorUrl = '/projectEditor/deleteProjectEditor'
//查询项目列表
let findListProjectUrl = '/project/findListProject'
//查询项目详情
let detailsProjectUrl = '/project/detailsProject'
//项目提交申请
let applyProjectUrl = '/project/applyProject'
//取消项目申请
let deleteApplyProjectUrl = '/project/deleteApplyProject'

//查询我的任务列表
let findMyProjectUrl = '/myProject/findMyProject'
// 获取用户的opneid
const install = (Vue, vm) => {
	// 此处没有使用传入的params参数
	// let login = (params = {}) => vm.$u.post(loginUrl,params);
	// 此处使用了传入的params参数，一切自定义即可
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	// 获取用户的openId和
	let login = (params = {}) => vm.$u.post(loginUrl + `?userName=` + params.userName + `&password=` + params.password);
	// 退出登录
	let logout =(params = {}) => vm.$u.post(logoutUrl);
	// 发送登陆短信
	let sendLoginSms = (params = {}) => vm.$u.post(sendLoginSmsUrl + `?phone=` + params.phone);
	// 短信登陆
	let loginSms = (params = {}) => vm.$u.post(smsLoginUrl + `?phone=` + params.phone + `&code=` + params.code);
	// 发送注册短信
	let sendRegisterSms = (params = {}) => vm.$u.post(sendRegisterSmsUrl + `?phone=` + params.phone);
	// 用户注册
	let register = (params = {}) => vm.$u.post(registerUrl + `?name=` + params.name + `&code=` + params.code +
		`&userName=` + params.name + `&password=` + params.password + `&phone=` + params.phone + `&role=` + params.role);
	// 发送修改密码验证码
	let sendForgetPwdCode = (params = {}) => vm.$u.post(sendForgetPwdCodeUrl + `?phone=` + params.phone);
	// 校验修改密码验证码是否正确
	let checkForgetPwdCode = (params = {}) => vm.$u.post(checkChangeCodeUrl + `?phone=` + params.phone + `&code=` +
		params.code);
	// 提交修改后的密码
	let rePassword = (params = {}) => vm.$u.post(changPwdUrl + `?phone=` + params.phone +
		`&password=` + params.password + `&newpassword=` + params.newpassword);
	// 发送修改邮箱的手机号
	let sendEmailSms = (params = {}) => vm.$u.post(sendEmailSmsUrl + `?phone=` + params.phone);
	// 添加邮箱
	let addEmail = (params = {}) => vm.$u.post(addEmailUrl + `?phone=` + params.phone + `&code=` +
		params.code + `&email=` +
		params.email);
	// 获取用户个人信息
	let getUserInfo = (params = {}) => vm.$u.post(getUserInFoUrl + `?phone=` + params.phone);
	// 提交认证信息
	let uploadidNoRecognize = (params = {}) => vm.$u.post(idNoRecognizeUrl + `?phone=` + params.phone + `&imagePath=` + params.imagePath+ `&signImagePath=` + params.signImagePath);
	// 发送修改手机的短信
	let changePhoneSms = (params = {}) => vm.$u.post(changePhoneSmsUrl + `?phone=` + params.phone);
	// 更新手机号
	let updataPhone = (params = {}) => vm.$u.post(updataPhoneUrl + `?phone=` + params.phone + `&code=` +
		params.code + `&newphone=` +
		params.newphone);
	// 修改手机号短信验证码校验
	let updataPhoneSmsCheck = (params = {}) => vm.$u.post(updataPhoneSmsCheckUrl + `?phone=` + params.phone + `&code=` +
		params.code);
	// 获取到首页推荐项目
	let getPorjecList = (params = {}) => vm.$u.post(getPorjectListUrl + `?current=` + params.current);
	// 查询发票抬头
	let selectInvoiceTitle = (params = {}) => vm.$u.post(selectInvoiceTitleUrl + `?userId=` + params.userId);
	// 添加发票抬头
	let addInvoiceTitle = (params = {}) => vm.$u.post(addInvoiceTitleUrl,params);
	// //查询开票记录
	let selectInvoiceRecord = ( params = {}) => vm.$u.post(selectInvoiceRecordUrl + `?userId=` + params.userId);
	//查询可开具发票项目
	let selectInvoiceProject = (params = {}) => vm.$u.post(selectInvoiceProjectUrl + `?ids=` + params.ids );
	//删除发票
	let deleteInvoice = (params = {}) => vm.$u.post(deleteInvoiceUrl + `?id=` + params.id );


	//查询发票项目列表 
	let seleceInvoiceProjectList = (params = {}) => vm.$u.post(seleceInvoiceProjectListUrl + `?userId=` + params.userId );
	//电子发票记录添加
	let elcInvoice = (params = {}) => vm.$u.post(elcInvoiceUrl+ `?userId=` + params.userId,params);
	//查询发票审核
	let selectInvoiceUser = (params = {}) => vm.$u.post(selectInvoiceUserUrl,params);
	//查询发票列表页数
	let selectListRecordPage = (params = {}) => vm.$u.post(selectListRecordPageUrl + `?current=` + params.current,params);
	// 发票记录删除
	let deleteInvoiceRecord = (params = {}) => vm.$u.post(deleteInvoiceRecordUrl+ `?id=` + params.id);
	// 发票记录详情
	let selectInvoiceDetail = (params = {}) => vm.$u.post(selectInvoiceDetailUrl+ `?id=` + params.id);
	// 项目合同列表
	let selectProjectAgreementList =(params = {}) => vm.$u.post(selectProjectAgreementListUrl + `?projectId=` + params.projectId);
	//项目合同所有列表
	let selectAllProjectAgreementList = (params = {}) => vm.$u.post(selectAllProjectAgreementListUrl + `?userId=` + params.userId );
	//查看合同
	let selectAgreementById= (params = {}) => vm.$u.post(selectAgreementByIdUrl+ `?id=` + params.id);
	//添加合同
	let addAgreement = (params = {}) => vm.$u.post(addAgreementUrl + `?agreementId=` + params.agreementId + `&agreementUserId=` + params.agreementUserId + `&agreementUserName=` + params.agreementUserName+ `&content=` + params.content+ `&id=` + params.id+ `&projectId=` + params.projectId+ `&reason=` + params.reason+ `&receiveTime=` + params.receiveTime+ `&signName=` + params.signName+ `&signTime=` + params.signTime+ `&status=` + params.status);
	//修改合同
	let updateAgreement = (params = {}) => vm.$u.post(updateAgreementUrl + `?agreementId=` + params.agreementId + `&agreementUserId=` + params.agreementUserId + `&agreementUserName=` + params.agreementUserName+ `&content=` + params.content+ `&id=` + params.id+ `&projectId=` + params.projectId+ `&reason=` + params.reason+ `&receiveTime=` + params.receiveTime+ `&signName=` + params.signName+ `&signTime=` + params.signTime+ `&status=` + params.status);
	//签订合同
	let signAgreement =  (params = {}) => vm.$u.post(signAgreementUrl + `?agreementId=` + params.agreementId + `&agreementUserId=` + params.agreementUserId + `&agreementUserName=` + params.agreementUserName+ `&content=` + params.content+ `&id=` + params.id+ `&projectId=` + params.projectId+ `&reason=` + params.reason+ `&receiveTime=` + params.receiveTime+ `&signName=` + params.signName+ `&signTime=` + params.signTime+ `&status=` + params.status);
	//拒绝合同
	let refuseAgreement = (params = {}) => vm.$u.post(refuseAgreementUrl + `?agreementId=` + params.agreementId + `&agreementUserId=` + params.agreementUserId + `&agreementUserName=` + params.agreementUserName+ `&content=` + params.content+ `&id=` + params.id+ `&projectId=` + params.projectId+ `&reason=` + params.reason+ `&receiveTime=` + params.receiveTime+ `&signName=` + params.signName+ `&signTime=` + params.signTime+ `&status=` + params.status);
	//项目进度添加
	let addProjectProcess = (params = {}) => vm.$u.post(addProjectProcessUrl + '?projectId=' + params.projectId+ '&stageNumber='+ params.stageNumber,[params]);
	//项目进度检查
	let checckProjectProcess = (params = {}) => vm.$u.post(checckProjectProcessUrl + `?checkStatus=` + params.checkStatus + `&deductAmount=` + params.deductAmount + `&id=` + params.id+ `&payAmount=` + params.payAmount+ `&payContent=` + params.payContent+ `&payDetail=` + params.payDetail+ `&payTime=` + params.payTime+ `&projectId=` + params.projectId+ `&reason=` + params.reason+ `&stage=` + params.stage + `&stageName=` + params.stageName + `&stageNumber=` + params.stageNumber + `&status=` + params.status + `&submitTime=` + params.submitTime + `&totalAmount=` + params.totalAmount);
	// 关闭项目进度
	let closeProjectProcess = (params = {}) => vm.$u.post(closeProjectProcessUrl + '?closeReason=' + params.closeReason + '&projectId=' + params.projectId);
	//确认项目进度
	let confirmProjectProcess = (params = {}) => vm.$u.post(confirmProjectProcessUrl + '?projectId=' + params.projectId);
	//评价项目进度
	let evaluateProjectProcess = (params = {}) => vm.$u.post(evaluateProjectProcessUrl + `?allprog=` + params.allprog + `&alltype=` + params.alltype + `&bmrs=` + params.bmrs+ `&create_time=` + params.create_time+ `&evaluateContent=` + params.evaluateContent+ `&evaluateStar=` + params.evaluateStar+ `&headImg=` + params.headImg+ `&id=` + params.id+ `&jsyq=` + params.jsyq+ `&logo=` + params.logo + `&macodeName=` + params.macodeName + `&name=` + params.name + `&price=` + params.price + `&reason=` + params.reason + `&recruit=` + params.recruit + `&status=` + params.status + `&type=` + params.type + `&userId=` + params.userId + `&userName=` + params.userName);
	//项目进度阶段列表
	let projectProcessList= (params = {}) => vm.$u.post(projectProcessListUrl + '?projectId=' + params.projectId);
	//重新添加项目进度
	let reAddProjectProcess = (params = {}) => vm.$u.post(reAddProjectProcessUrl + '?projectId=' + params.projectId + '&stageNumber=' + params.stageNumber,[params]);
	//拒绝项目进度阶段
	let refuseProjectProcess = (params = {}) => vm.$u.post(refuseProjectProcessUrl + '?projectId=' + params.projectId + '&reason=' + params.reason);
	//提交项目进度
	let submitProjectProcess = (params = {}) => vm.$u.post(submitProjectProcessUrl + `?checkStatus=` + params.checkStatus + `&deductAmount=` + params.deductAmount + `&id=` + params.id+ `&payAmount=` + params.payAmount+ `&payContent=` + params.payContent+ `&payDetail=` + params.payDetail+ `&payTime=` + params.payTime+ `&projectId=` + params.projectId+ `&reason=` + params.reason+ `&stage=` + params.stage + `&stageName=` + params.stageName + `&stageNumber=` + params.stageNumber + `&status=` + params.status + `&submitTime=` + params.submitTime + `&totalAmount=` + params.totalAmount);
	//查询项目阶段数
	let selectPhaseCount = (params = {}) => vm.$u.post(selectPhaseCountUrl + '?projectId=' + params.projectId);
	//删除项目阶段
	let deletePhase = (params = {}) => vm.$u.post(deletePhaseUrl + '?ids=' + params.ids);
	//查询项目阶段信息
	let selectPhase = (params = {}) => vm.$u.post(selectPhaseUrl + '?projectId=' + params.projectId);
	//保存项目阶段信息
	let savePhase = (params = {}) => vm.$u.post(savePhaseUrl,[params]);
	//更新项目阶段信息
	let updatePhase = (params = {}) => vm.$u.post(updatePhaseUrl,[params]);
	//项目参与者单个项目查询
	let findProjectManProject =  (params = {}) => vm.$u.post(findProjectManProjectUrl + '?projectId=' + params.projectId);
	//未审核项目分页查询
	let findtManAllProject = (params = {}) => vm.$u.post(findtManAllProjectUrl + '?pageCurrent=' + params.pageCurrent + '&projectName=' + params.projectName + '&userName=' + params.userName);
	//qq
	let findManProjectApply =  (params = {}) => vm.$u.post(findManProjectApplyUrl + '?pageCurrent=' + params.pageCurrent + '&projectId=' + params.projectId);
	//分页查询所有审核记录
	let findManProjectAudit = (params = {}) => vm.$u.post(findManProjectAuditUrl + '?pageCurrent=' + params.pageCurrent + '&projectName=' + params.projectName + '&status=' + params.status + '&userName=' + params.userName);
	//审核过的项目分页查询
	let findManProjectPass =  (params = {}) => vm.$u.post(findManProjectPassUrl + '?pageCurrent=' + params.pageCurrent + '&projectName=' + params.projectName + '&type=' + params.type + '&userName=' + params.userName);
	//qw 待定
	// let updateManProject = (params = {}) => vm.$u.post(updateManProjectUrl + `?=` + params. + `&alltype=` + params.alltype + `&bmrs=` + params.bmrs+ `&create_time=` + params.create_time+ `&evaluateContent=` + params.evaluateContent+ `&evaluateStar=` + params.evaluateStar+ `&headImg=` + params.headImg+ `&id=` + params.id+ `&jsyq=` + params.jsyq+ `&logo=` + params.logo + `&macodeName=` + params.macodeName + `&name=` + params.name + `&price=` + params.price + `&reason=` + params.reason + `&recruit=` + params.recruit + `&status=` + params.status + `&type=` + params.type + `&userId=` + params.userId + `&userName=` + params.userName);
	//opp
	let updateManProjectProcess = (params = {}) => vm.$u.post(updateManProjectProcessUrl + `?checkStatus=` + params.checkStatus + `&deductAmount=` + params.deductAmount + `&password=` + params.password + `&id=` + params.id+ `&payAmount=` + params.payAmount+ `&payContent=` + params.payContent+ `&payDetail=` + params.payDetail+ `&payTime=` + params.payTime+ `&projectId=` + params.projectId+ `&reason=` + params.reason+ `&stage=` + params.stage + `&stageName=` + params.stageName + `&stageNumber=` + params.stageNumber + `&status=` + params.status + `&submitTime=` + params.submitTime + `&totalAmount=` + params.totalAmount);
	
	
	
	// 头像修改
	let updateAvatar = (params = {}) => vm.$u.post(updateAvatarUrl + '?profile=' + params.profile);
	//查询用户评论

	let selectEstimate= (params = {}) => vm.$u.post(selectEstimateUrl + '?phone=' + params.phone);
	//获取用户评论总数
	let selectEstimateCount = (params = {}) => vm.$u.post(selectEstimateCountUrl + '?phone=' + params.phone);
	//查询id评论
	let findOneEstimate = (params = {}) => vm.$u.post(findOneEstimateUrl + '?id=' + params.id+ `&details=` + params.details+ `&score=` + params.score+ `&status=` + params.status);
	//修改用户评论
	let updateEstimates = (params = {}) => vm.$u.post(updateEstimatesUrl + '?id=' + params.id+ `&audit=` + params.audit+ `&details=` + params.details+ `&score=` + params.score);
	//删除用户评论
	let deleteEstimates = (params = {}) => vm.$u.post(deleteEstimatesUrl + '?id=' + params.id);

	// 查询工作经历
	let selectFindWork = (params={}) => vm.$u.post(selectFindWorkUrl + '?phone=' + params.phone);
	// 保存工作经历
	let saveWork = (params={}) => vm.$u.post(saveWorkUrl + '?phone=' + params.phone+ `&companyName=` + params.companyName+ `&startTime=` + params.startTime+ `&endTime=` + params.endTime+ `&jobtitle=` + params.jobtitle+ `&jubduties=` + params.jubduties+`&workId=` + params.workId);
	// 修改工作经历
	let findOneWork = (params={}) => vm.$u.post(findOneWorkUrl + '?workId=' + params.workId);
	// 删除工作经历
	let deleteWork = (params={}) => vm.$u.post(deleteWorkUrl + '?workId=' + params.workId);
	// 修改后保存工作经历
	let updateWork = (params={}) => vm.$u.post(updateWorkUrl + '?phone=' + params.phone+ `&companyName=` + params.companyName+ `&startTime=` + params.startTime+ `&endTime=` + params.endTime+ `&jobtitle=` + params.jobtitle+ `&jubduties=` + params.jubduties+`&workId=` + params.workId);
	// 查询擅长技能
	let selectFindSkills = (params={}) => vm.$u.post(selectFindSkillsUrl + '?phone=' + params.phone);
	// 保存擅长技能
	let saveSkills = (params={}) => vm.$u.post(saveSkillsUrl + '?phone=' + params.phone + `&entity=` +
		params.entity);
	//查询个人介绍
	let selectFindPersonal = (params={}) => vm.$u.post(selectFindPersonalUrl + '?phone=' + params.phone);
	//修改个人介绍
	let updataPersonal = (params={}) => vm.$u.post(updataPersonalUrl + '?phone=' + params.phone+ `&personal=` +
		params.personal);
	//查询教育经历
	let selectFindEducational = (params={}) => vm.$u.post(selectFindEducationalUrl + '?phone=' + params.phone);
	//查询单个教育经历
	let findOneEducational = (params={}) => vm.$u.post(findOneEducationalUrl + '?id=' + params.id);
	//添加教育经历
	let saveEducational = (params={}) => vm.$u.post(saveEducationalUrl + '?phone=' + params.phone+ `&schoolName=` + params.schoolName+ `&major=` + params.major+ `&education=` + params.education+ `&startTime=` + params.startTime+ `&endTime=` + params.endTime+`&synopsis=` + params.synopsis+`&id=` + params.id);
	//删除教育经历
	let deleteEducational = (params={}) => vm.$u.post(deleteEducationalUrl + '?id=' + params.id);
	//查询项目案例
	let findProjectEditor = (params={}) => vm.$u.post(findProjectEditorUrl + '?phone=' + params.phone);
	//查询单个项目案例
	let findOneProjectEditor = (params={}) => vm.$u.post(findOneProjectEditorUrl + '?projectId=' + params.projectId);
	//保存项目案例
	let saveProjectEditor = (params={}) => vm.$u.post(saveProjectEditorUrl + '?phone=' + params.phone+ `&projectName=` + params.projectName+ `&leadTime=` + params.leadTime+ `&projects=` + params.projects+`&picture=`+ params.picture+ `&url=` + params.url+ `&projectId=` + params.projectId);
	//删除项目案例
	let deleteProjectEditor = (params={}) => vm.$u.post(deleteProjectEditorUrl + '?projectId=' + params.projectId);
	//查询项目列表
	let findListProject = (params={}) => vm.$u.post(findListProjectUrl + '?pageCurrent=' + params.pageCurrent+ `&projectName=` + params.projectName+ `&status=` + params.status+ `&type=` + params.type);
	//查询项目详情
	let detailsProject = (params={}) => vm.$u.post(detailsProjectUrl + '?id=' + params.id);
	//项目提交申请
	let applyProject = (params={}) => vm.$u.post(applyProjectUrl + '?applyStatus=' + params.applyStatus+ `&applyTime=` + params.applyTime+`&applyUserId=` + params.applyUserId+`&projectId=` + params.projectId+`&reason=` + params.reason);
	//取消项目申请
	let deleteApplyProject = (params={}) => vm.$u.post(deleteApplyProjectUrl + '?applyStatus=' + params.applyStatus+ `&applyTime=` + params.applyTime+`&applyUserId=` + params.applyUserId+`&projectId=` + params.projectId+`&reason=` + params.reason);
	//查询任务列表
	let findMyProject = (params={}) => vm.$u.post(findMyProjectUrl + '?userId=' + params.userId);
	// 提交证件识别接口地址
	let veriftyApi = `http://demo.ngrok.snsxm.top/idNo/idNoRecognize`;
	let certificateApi = `http://demo.ngrok.snsxm.top/certificate/certificateRecognize`
	vm.$u.api = {
		login,
		logout,
		sendLoginSms,
		loginSms,
		sendRegisterSms,
		register,
		sendForgetPwdCode,
		checkForgetPwdCode,
		rePassword,
		sendEmailSms,
		addEmail,
		getUserInfo,
		uploadidNoRecognize,
		changePhoneSms,
		updataPhone,
		updataPhoneSmsCheck,
		getPorjecList,
		addInvoiceTitle,
		selectInvoiceRecord,
		selectInvoiceProject,
		deleteInvoice,
		elcInvoice,
		updateAvatar,
		selectEstimate,
		selectEstimateCount,
		findOneEstimate,
		updateEstimates,
		deleteEstimates,
		selectFindWork,
		saveWork,
		findOneWork,
		deleteWork,
		updateWork,
		selectFindSkills,
		saveSkills,
		selectFindPersonal,
		updataPersonal,
		selectFindEducational,
		selectInvoiceTitle,
		selectInvoiceUser,
		selectListRecordPage,
		deleteInvoiceRecord,
		selectInvoiceDetail,
		selectProjectAgreementList,
		selectAllProjectAgreementList,
		selectAgreementById,
		addAgreement,
		updateAgreement,
		signAgreement,
		refuseAgreement,
		addProjectProcess,
		checckProjectProcess,
		closeProjectProcess,
		confirmProjectProcess,
		evaluateProjectProcess,
		projectProcessList,
		reAddProjectProcess,
		refuseProjectProcess,
		submitProjectProcess,
		selectPhaseCount,
		deletePhase,
		selectPhase,
		savePhase,
		updatePhase,
		findProjectManProject,
		findtManAllProject,
		findManProjectApply,
		findManProjectAudit,
		findManProjectPass,
		updateManProjectProcess,
		
		
		findOneEducational,
		saveEducational,
		deleteEducational,
		findProjectEditor,
		findOneProjectEditor,
		saveProjectEditor,
		deleteProjectEditor,
		selectInvoiceTitle,
		findListProject,
		detailsProject,
		applyProject,
		deleteApplyProject,
		findMyProject

	};
}

export default {
	install
}
