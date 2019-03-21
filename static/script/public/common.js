(function(){
	var $mod_notice = document.querySelector(".mod-notice");
	var list = [];
	for(var key in _activity){
		_activity[key].forEach(function(item){
			list.push(item);
		});
	}
	var i=0;
	var update = function(){
		i = (i+1)%list.length;
		var item = list[i];
		if(item['url']){
			$mod_notice.innerHTML = '<p class="icon-notice"><a href="'+item['url']+'" target="_blank">'+item['title']+'</a></p>';
		}else{
			$mod_notice.innerHTML = '<p class="icon-notice">'+item['title']+'</p>';
		}
	};
	setInterval(update,30000);
	update();
})();