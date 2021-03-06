var PARAM_CFG = {
    "rech_levels": [{
        "id": 1,
        "param": "rech_levels",
        "name": "默认层",
        "value": "0",
        "remark": null,
        "sort": 1,
        "extInfo": null,
        "open": 0,
        "rebate": null
    }, {
        "id": 2,
        "param": "rech_levels",
        "name": "第一层",
        "value": "1",
        "remark": null,
        "sort": 2,
        "extInfo": null,
        "open": 0,
        "rebate": null
    }, {
        "id": 3,
        "param": "rech_levels",
        "name": "第二层",
        "value": "2",
        "remark": null,
        "sort": 3,
        "extInfo": null,
        "open": 0,
        "rebate": null
    }, {
        "id": 4,
        "param": "rech_levels",
        "name": "第三层",
        "value": "3",
        "remark": null,
        "sort": 4,
        "extInfo": null,
        "open": 0,
        "rebate": null
    }, {
        "id": 5,
        "param": "rech_levels",
        "name": "第四层",
        "value": "4",
        "remark": null,
        "sort": 5,
        "extInfo": null,
        "open": 0,
        "rebate": null
    }, {
        "id": 20,
        "param": "rech_levels",
        "name": "第五层",
        "value": "5",
        "remark": null,
        "sort": 6,
        "extInfo": null,
        "open": 0,
        "rebate": null
    }, {
        "id": 21,
        "param": "rech_levels",
        "name": "第六层",
        "value": "6",
        "remark": null,
        "sort": 7,
        "extInfo": null,
        "open": 0,
        "rebate": null
    }],
    "rech_type": [{
        "id": 8,
        "param": "rech_type",
        "name": "在线支付",
        "value": "onlinePayment",
        "remark": "支持国内16家银行的借记卡个人网银支付，0手续费，免提交【<font color=\"#FF0000\"><strong>直接到账</strong></font>】，方便快捷！",
        "sort": 1,
        "extInfo": "{url:'/pay/online.html'}",
        "open": 0,
        "rebate": 0.0
    }, {
        "id": 9,
        "param": "rech_type",
        "name": "银行汇款",
        "value": "bankTransfer",
        "remark": "请每次入款前登陆会员核对银行账号是否使用！ 温馨提示：为确保财务第一时间为您添加游戏额度,请您尽量不要转账整数(例如：欲如￥5000,请转￥5000.68)谢谢！ 操作备注：银行汇款步骤->点击【银行汇款】,点选您所要使用的银行,复制公司的银行账号来完成转账。 然后 提交您存款的相关资料,工作人员将在5分钟之内把您的金额存到您的会员账号上,感谢您的支持和配合！",
        "sort": 2,
        "extInfo": "{url:'/pay/bank.html'}",
        "open": 0,
        "rebate": 0.0
    }, {
        "id": 10,
        "param": "rech_type",
        "name": "支付宝支付",
        "value": "alipay",
        "remark": null,
        "sort": 3,
        "extInfo": "{url:'/pay/alipay.html'}",
        "open": 0,
        "rebate": 0.0
    }, {
        "id": 11,
        "param": "rech_type",
        "name": "微信支付",
        "value": "weixin",
        "remark": null,
        "sort": 4,
        "extInfo": "{url:'/pay/weixin.html'}",
        "open": 0,
        "rebate": 0.0
    },  {
        "id": 11,
        "param": "rech_type",
        "name": "微信支付",
        "value": "wechatCodePayment",
        "remark": null,
        "sort": 4,
        "extInfo": "{url:'/pay/weixin.html'}",
        "open": 0,
        "rebate": 0.0
    },{
        "id": 24,
        "param": "rech_type",
        "name": "财付通",
        "value": "cft",
        "remark": null,
        "sort": null,
        "extInfo": "{url:'/pay/cft.html'}",
        "open": 0,
        "rebate": 0.0
    }, {
        "id": 36,
        "param": "rech_type",
        "name": "后台加钱",
        "value": "adminAddMoney",
        "remark": null,
        "sort": 6,
        "extInfo": null,
        "open": 0,
        "rebate": null
    }],
    "rech_bank": [{
        "id": 12,
        "param": "rech_bank",
        "name": "农业银行",
        "value": "ABC",
        "remark": null,
        "sort": 1,
        "extInfo": "{imgurl:'/images/data/nongye.gif'}",
        "open": 0,
        "rebate": null
    }, {
        "id": 13,
        "param": "rech_bank",
        "name": "建设银行",
        "value": "CCB",
        "remark": null,
        "sort": 2,
        "extInfo": "{imgurl:'/images/data/jianshe.gif'}",
        "open": 0,
        "rebate": null
    }, {
        "id": 14,
        "param": "rech_bank",
        "name": "工商银行",
        "value": "ICBC",
        "remark": null,
        "sort": 3,
        "extInfo": "{imgurl:'/images/data/gongshang.gif'}",
        "open": 0,
        "rebate": null
    }, {
        "id": 15,
        "param": "rech_bank",
        "name": "招商银行",
        "value": "CMB",
        "remark": null,
        "sort": 4,
        "extInfo": "{imgurl:'/images/data/zhaohang.gif'}",
        "open": 0,
        "rebate": null
    }, {
        "id": 16,
        "param": "rech_bank",
        "name": "交通银行",
        "value": "BOCO",
        "remark": null,
        "sort": 5,
        "extInfo": "{imgurl:'/images/data/jiaotong.gif'}",
        "open": 0,
        "rebate": null
    }, {
        "id": 17,
        "param": "rech_bank",
        "name": "民生银行",
        "value": "CMBC",
        "remark": null,
        "sort": 6,
        "extInfo": "{imgurl:'/images/data/minsheng.gif'}",
        "open": 0,
        "rebate": null
    }, {
        "id": 18,
        "param": "rech_bank",
        "name": "兴业银行",
        "value": "CIB",
        "remark": null,
        "sort": 7,
        "extInfo": "{imgurl:'/images/data/xingye.gif'}",
        "open": 0,
        "rebate": null
    }, {
        "id": 19,
        "param": "rech_bank",
        "name": "中国银行",
        "value": "BOC",
        "remark": null,
        "sort": 8,
        "extInfo": "{imgurl:'/images/data/zhongguo.gif'}",
        "open": 0,
        "rebate": null
    }, {
        "id": 25,
        "param": "rech_bank",
        "name": "邮政银行",
        "value": "POST",
        "remark": null,
        "sort": 9,
        "extInfo": null,
        "open": 0,
        "rebate": null
    }, {
        "id": 26,
        "param": "rech_bank",
        "name": "光大银行",
        "value": "CEBBANK",
        "remark": null,
        "sort": 10,
        "extInfo": null,
        "open": 0,
        "rebate": null
    }, {
        "id": 27,
        "param": "rech_bank",
        "name": "中信银行",
        "value": "ECITIC",
        "remark": null,
        "sort": 11,
        "extInfo": null,
        "open": 0,
        "rebate": null
    }, {
        "id": 28,
        "param": "rech_bank",
        "name": "广发银行",
        "value": "CGB",
        "remark": null,
        "sort": 12,
        "extInfo": null,
        "open": 0,
        "rebate": null
    }, {
        "id": 29,
        "param": "rech_bank",
        "name": "浦发银行",
        "value": "SPDB",
        "remark": null,
        "sort": 13,
        "extInfo": null,
        "open": 0,
        "rebate": null
    }, {
        "id": 30,
        "param": "rech_bank",
        "name": "华夏银行",
        "value": "HXB",
        "remark": null,
        "sort": 14,
        "extInfo": null,
        "open": 0,
        "rebate": null
    }, {
        "id": 31,
        "param": "rech_bank",
        "name": "平安银行",
        "value": "PINGAN",
        "remark": null,
        "sort": 15,
        "extInfo": null,
        "open": 0,
        "rebate": null
    }, {
        "id": 32,
        "param": "rech_bank",
        "name": "北京银行",
        "value": "BCCB",
        "remark": null,
        "sort": 16,
        "extInfo": null,
        "open": 0,
        "rebate": null
    }, {
        "id": 33,
        "param": "rech_bank",
        "name": "上海银行",
        "value": "BOS",
        "remark": null,
        "sort": 17,
        "extInfo": null,
        "open": 0,
        "rebate": null
    }, {
        "id": 34,
        "param": "rech_bank",
        "name": "北京农商",
        "value": "BRCB",
        "remark": null,
        "sort": 18,
        "extInfo": null,
        "open": 0,
        "rebate": null
    }]
};
