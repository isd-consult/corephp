$(function(){
	//{{{ 游戏快速操作部分
	// 选号按钮点击事件
	$('input.code').live('click', function(){
		var $this=$(this);
		
		if($this.is('.checked')){
			$this.removeClass('checked');
		}else{
			$this.addClass('checked');
		}
		
		// 重新计算总预投注数和金额
		gameCalcAmount();
	});
	
	// IE下禁止下连接、按钮、单选框和复选框获得焦点
	if($.browser.msie){
		$('a, :button, :radio, :checkbox').live('focus', function(){
			this.blur();
		});
	}
	// 操作快速选号按钮点击事件
	$('input.action').live('click', function(){
		var $this=$(this),
		call=$this.attr('action'),
		pp=$this.parent();
		$this.addClass("on").siblings(".action").removeClass("on");
		if(call && $.isFunction(call=window[call])){
			call.call(this, pp);
		}else if($this.is('.all')){
			// 全－全部选中
			$('input.code',pp).addClass('checked');
		}else if($this.is('.large')){
			// 大－选中5到9
			$('input.code.max',pp).addClass('checked');
			$('input.code.min',pp).removeClass('checked');
		}else if($this.is('.small')){
			// 小－选中0到4
			$('input.code.min',pp).addClass('checked');
			$('input.code.max',pp).removeClass('checked');
		}else if($this.is('.odd')){
			// 单－选中单数
			$('input.code.d',pp).addClass('checked');
			$('input.code.s',pp).removeClass('checked');
		}else if($this.is('.even')){
			// 双－选中双数
			$('input.code.s',pp).addClass('checked');
			$('input.code.d',pp).removeClass('checked');
		}else if($this.is('.none')){
			// 清－全不选
			$('input.code',pp).removeClass('checked');
		}
	});
	// 点击查看选号
	$('td.code-list').live('click', function(){
		var data=$(this).parent().data('code');
		displayCodeList(data);
	});
	
	// 选中号码快速操作
	// 在具体的模板中定义，以便响应不同的操作

	// 预投注号码移除
	$('.touzhu-cont .del').live('click', function(){
		$(this).closest('tr').remove();
		$('.touzhu-bottom :checkbox[name=zhuiHao]').removeData()[0].checked=false;
		gameCalcAmount();
	});
	
	$('#btnPostBet').unbind('click');
	$('#btnPostBet').bind('click',gamePostCode);

	// 滑动块
	$('.slider').each(function(){
		var $this=$(this),
		onslide, attr={};
		
		['value', 'min', 'max', 'step'].forEach(function(p){
			if(!isNaN(value=parseFloat($this.attr(p)))){
				attr[p]=value;
			}
		});
		
		//console.log(attr);
		
		if(onslide=$this.attr('slideCallBack')){
			if(typeof window[onslide]=='function'){
				attr.slide=function(event, ui){
					window[onslide].call(this, ui.value);
				}
			}
		}
		
		$this.slider(attr);
	});
		
	// 按增大减少按钮调整返点
	$('.fandian-box input').click(function(){
		var $slider=$('#slider'),
		min=parseFloat($slider.attr('min')),
		max=parseFloat($slider.attr('max')),
		value=$slider.slider('option', 'value');
		
		value+=parseFloat($(this).attr('step'));
		if(value<min) value=min;
		if(value>max) value=max;
		
		$slider.slider('option', 'value', value);
		gameSetFanDian.call($slider[0], value);
	});
	
	//录入式投注录入框键盘事件
	$('#textarea-code').live('keypress', function(event){
		//console.log(event);
		event.keyCode=event.keyCode||event.charCode;
		return !!(
			// 按Ctrl、Alt、Shift时有效
			event.ctrlKey
			|| event.altKey
			|| event.shiftKey
			
			// 回车键有效
			|| event.keyCode==13
			
			// 退格键有效
			|| event.keyCode==8
			
			// 数字键有效
			|| (event.keyCode>=48
			&& event.keyCode<=57)
		);

	}).live('keyup', gameMsgAutoTip);
	
	
	$('#textarea-code').live('change', function(){
		var str=$(this).val();
		if(/[a-zA-Z]+/.test(str)){
			winjinAlert('投注号码不能含有字母字符',"alert");
			$(this).val('');
		}
	});
	
    // 点击选号按钮时提示信息
	$('.pp :button, :radio[name=danwei]').live('click', gameMsgAutoTip);
	$('#money').live('change', gameMsgAutoTip);
	$('.surmoney').live('click', function(){
		var newVal=parseInt($('#money').val())-1;
		if(newVal<1) newVal=1;
		$('#money').val(newVal);
		gameMsgAutoTip();
	});
	$('.addmoney').live('click', function(){
		var newVal=parseInt($('#money').val())+1;
		$('#money').val(newVal);
		gameMsgAutoTip();
	});

	// 追号
	$('.touzhu-bottom :checkbox[name=zhuiHao]')
	.click(function(){
		var bet=$('.touzhu-cont tbody tr'),
		len=bet.length
		if(len==0){
			winjinAlert('请选投注',"alert");
			return false;
		}else if(len>1){
			winjinAlert('只能针对一个方案发起追号！',"alert");
			return false;
		}
		var zh_value = document.getElementById("zhselect").value;  //多少期
		var zh_bs = document.getElementById("zh_bs").value;  //多少期
		if(zh_value==0){
        $("#zh-div").toggle(500);//显示隐藏切换,参数可以无,参数说明同
		    return false;
		}
		//if(this.checked) 
		setGameZhuiHao(bet.data('code'),zh_bs,zh_value);
        $("#zh-div").toggle(500);//显示隐藏切换,参数可以无,参数说明同
	    $("#zhselect").find("option[value='0']").attr("selected",true);  
		return false;
	});
	
	$('.touzhu-bottom :checkbox[name=fpEnable]')
	.click(function(){
		var bet=$('.touzhu-cont tbody tr'),
		len=bet.length,
		amount=parseInt($('#all-amount').text());
		if($(this).attr("checked")){
			if(len==0){
				winjinAlert('请选投注',"alert");
				return false;
			}
			amount*=2;
			$('#all-amount').text(amount.round(2));
		}else{
			amount/=2;
			$('#all-amount').text(amount.round(2));
			}
		return true;
	});
	$('.zhui-hao-modal thead :checkbox').live('change', function(){
		$(this).closest('table').find('tbody :checkbox').prop('checked', this.checked).trigger('change');
	});
	$('.zhui-hao-modal tbody :checkbox').live('change', function(){
		var $this=$(this),
		$ui=$this.closest('div[rel]'),
		data=$ui.data(),
		amount=$ui.attr('rel') * Math.abs($this.closest('tr').find('.money').val()),
		$show=$ui.closest('.zhui-hao-modal').find('.ui-dialog-title');
		if(!data.count){
			data.count=0;
			data.amount=0;
		}
		if(this.checked){
			data.count++;
			data.amount+=amount;
		}else{
			data.count--;
			data.amount-=amount;
		}
		$('.qs', $show).text(data.count);
		$('.amount', $show).text(Math.round(data.amount*100)/100);
		$this.closest('tr').find('.amount').text(Math.round(amount*100)/100);
		$this.data('amount', amount);
	});
	$('.zhui-hao-modal tbody .money').live('change', function(e){
		var $this=$(this);
		var re=/^[1-9][0-9]*$/;
		if(!re.test($this.val())){winjinAlert('倍数只能为正整数',"alert");$this.val(1);return;}
		if(!$this.closest('tr').find(':checkbox')[0].checked) return ;

		var $ui=$this.closest('div[rel]'),
		data=$ui.data(),
		$checkbox=$this.closest('tr').find(':checkbox'),
		_amount=Math.abs($checkbox.data('amount'));
		amount=$ui.attr('rel') * Math.abs($this.val()),
		$show=$ui.closest('.zhui-hao-modal').find('.ui-dialog-title');
		data.amount+=amount-_amount;
		$checkbox.data('amount', amount);
		$('.qs', $show).text(data.count);
		$('.amount', $show).text(Math.round(data.amount*100)/100);
		$this.closest('tr').find('.amount').text(Math.round(amount*100)/100);
	});
	//{{{ 玩游戏页签切换
	// 主页签
	$('.game-btn a[href]').live('click', function(){
		var $this=$(this);
		
		if($this.is('.current')) return false;
		//$('#game-helptips').load($this.attr('tipsurl'));
		$('.game-btn2').load($this.attr('href'), function(){
			//alert($this.closest('.game-btn').find('.current')[0].innerHTML);
			$this.closest('.game-btn').find('.current').removeClass('current');
			$this.closest('div').addClass('current');
			$('.game-btn2 a[href]:first').trigger('click');
		});
		
		return false;
	});
	
	// 从属页签
	$('.game-btn2 a[href]').live('click', function(){
		var $this=$(this);

		//if($this.is('.current')) return false;
		//加载玩法信息
		loadPlayTips($this.attr('data_id'));
		$('#num-select').load($this.attr('href'), function(){
			$this.closest('.game-btn2').find('.current').removeClass('current');
			$this.parent().addClass('current');
		});
		
		return false;
	});
	//玩法信息
	$('.showhelp .showeg').live("mouseover",function(){
		var $action=$(this).attr('action');
		var ps = $(this).position();
		$('#'+$action+'s_div').siblings('.game_eg').hide();
		$('#'+$action+'s_div').css({top:ps.top + 20,left:ps.left + 20}).fadeIn(100);
		
	})
	$('.showhelp .showeg').live("mouseout",function(){
		$('#game-helptips').find('.game_eg').hide();
		
	})
	// 近期开奖数据
	$('.kjabtn').live('click', function(){
		var $this=$(this);
		//if($this.is('.current')) return ;
		
		$this.closest('.kaijiangall').find('ul').load($this.attr('src'), function(){
			$('.kjabtn.current').removeClass('current');
			$this.addClass('current');
		});
	});
	
	// 近期大奖与累计
	$('.jiang').live('click', function(){
		//console.log(this);
		var $this=$(this);
		if($this.is('.current')) return true;
		$('.jiang.current').removeClass('current');
		$this.addClass('current');
		return true;
	})
	.find('select').live('change', function(){
		$('.zj-cont tbody').load(this.value);
	});

	//删除庄内庄功能 DAVID
	$('.dantuo :radio').live('click', function(){
		var $dom=$(this).closest('.dantuo');
		
		if(this.value){
			$dom.next().hide().next().show();
		}else{
			$dom.next().show().next().hide();
		}
	});
	$('.dmtm :input.code').live('click',function(event){
		var $this=$(this),
		$dom=$this.closest('.dmtm');
		if($('.code.checked[value=' + this.value +']', $dom).not(this).length==1){
			$this.removeClass('checked');
			winjinAlert('选择胆码不能与拖码相同',"alert");
			return false;
		}
	});
	$('.zhixu115 :input.code').live('click',function(event){
		var $this=$(this);
		if(!$this.is('.checked')) return false;
		
		var $dom=$this.closest('.zhixu115');
		$('.code.checked[value=' + this.value +']', $dom).removeClass('checked');
		$this.addClass('checked');
	});
	if(getVoiceStatus()=='off'){
		$('#voice').removeClass('voice-on').addClass('voice-off').attr('title', '声音关闭，点击开启');
	}
});
var MaxZjCount={
	ds:function(){
		var zjCount=0,t=1,s;
		$.each(this.split('|').sort(), function(){
			if(s==String(this)){
				t++;
			}else{
				s=this;
				if(t>zjCount) zjCount=t;
				t=1;
			}
		});
		if(t>zjCount) zjCount=t;
		
		return zjCount;
	},
	fs:function(){
		return 1;
	},
	dxds:function(){
		var d=this.split(',').map(function(v){
			return v
			.replace('单','双')
			.replace('大', '小')
			.split("").sort().join('')
			.replace(/双{2,}/,'双')
			.replace(/小{2,}/,'小')
			.length;
		});
		return d[0] * d[1];
	},
	dd5x:function(){
		return this.split(',').filter(function(v){return v!='-'}).length;
	},
	bdd:function(){
		return this.length>3?3:this.length;
	}
}
//{{{ 播放声音
function playVoice(src, domId){
	if(getVoiceStatus()=='off') return;
	var $dom=$('#'+domId)
	if($.browser.msie){
		// IE用bgsound标签处理声音
		
		if($dom.length){
			$dom[0].src=src;
		}else{
			$('<bgsound>',{src:src, id:domId}).appendTo('body');
		}
	}else{
		// IE以外的其它浏览器用HTML5处理声音
		if($dom.length){
			$dom[0].play();
		}else{
			$('<audio>',{src:src, id:domId}).appendTo('body')[0].play();
		}
	}
}

function setVoiceStatus(flag){
	var session=(typeof sessionStorage!='undefined');
	var key='voiceStatus';
	if(session){
		if(!flag){
			sessionStorage.setItem(key,'off');
		}else{
			sessionStorage.removeItem(key);
		}
	}else{
		if(!flag){
			$.cookie(key, 'off');
		}else{
			$.cookie(key, null);
		}
	}
}
function getVoiceStatus(){
	var key='voiceStatus';
	if(typeof sessionStorage!='undefined'){
		return sessionStorage.getItem(key);
	}else{
		return $.cookie(key);
	}
}
function voiceKJ(){
	var $dom=$('#voice');
	if(getVoiceStatus()!='off'){
		setVoiceStatus(false);
		$dom.attr('class','voice-off').attr('title', '声音关闭，点击开启');
	}else{
		setVoiceStatus(true);
		$dom.attr('class','voice-on').attr('title', '声音开启，点击关闭');
	}
}
// 加载玩法消息
function loadPlayTips(playedid){
	$('#game-helptips').load('/index.php/index/playTips/'+playedid);
}
