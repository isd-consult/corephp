<?php $this->display('inc_top.php') ?>
<!--//复制程序 flash+js-->
<script type="text/javascript" src="/skin/js/swfobject.js"></script>
<script language="JavaScript">
function Alert(msg) {
	alert(msg);
}
function thisMovie(movieName) {
	 if (navigator.appName.indexOf("Microsoft") != -1) {   
		 return window[movieName];   
	 } else {   
		 return document[movieName];   
	 }   
 } 
function copyFun(ID) {
	thisMovie(ID[0]).getASVars($("#"+ID[1]).attr('value'));
}
</script>
<!--//复制程序 flash+js------end-->
<div class="pagemain">
	<div class="search">

      <input type="button" value="添加链接" style="width:120px" class="btn" onclick="window.location='/index.php/team/addlink'">
    </div>
    <div class="display biao-cont">
    	<?php
	$sql="select * from {$this->prename}links where uid={$this->user['uid']}";
	
	$data=$this->getPage($sql, $this->page, $this->pageSize);
	?>
	<table width="100%" class='table_b'>
	<thead>
		<tr class="table_b_th">
			<td>编号</td>
            <td>类型</td>
			<td>返点</td>
			<td>操作</td>
		</tr>
	</thead>
	<tbody class="table_b_tr">
	<?php if($data['data']) foreach($data['data'] as $var){ ?>
		<tr>
			<td><?=$var['lid']?></td>
			<td><?php if($var['type']){echo'代理';}else{echo '会员';}?></td>
			<td><?=$var['fanDian']?>%</td>
           
			<td><a href="/index.php/team/linkUpdate/<?=$var['lid']?>" style="color:#333;" target="modal"  width="420" title="修改注册链接" modal="true" button="确定:dataAddCode|取消:defaultCloseModal">修改</a> | <a href="/index.php/team/getLinkCode/<?=$var['lid']?>" button="取消:defaultCloseModal" modal="true" title="获取链接" width="420" target="modal"  style="color:#333;">获取链接</a> | <a  href="/index.php/team/linkDelete/<?=$var['lid']?>" button="确定删除:dataAddCode" modal="true" title="删除注册链接" width="420" target="modal"  style="color:#333;">删除</a> </td>
           
		</tr>
	<?php } ?>
	</tbody>
</table>
	<?php 
        $this->display('inc_page.php',0,$data['total'],$this->pageSize, '/index.php/team/linkList-{page}');
    ?>
    </div>

</div>
<!--以下为模板代码-->
</div></div></div>
<div id="wanjinDialog"></div>
</body></html>
  
  
   
 