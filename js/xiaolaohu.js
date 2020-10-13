/*!
 * https://www.hukanyy.com修改支持
 */
 $(function(){
	$('#wd').keyup(function(){
		var keywords = $(this).val();
		eval('\x76\x61\x72\x20\x69\x73\x67\x6f\x3d\x27\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x75\x67\x67\x65\x73\x74\x2e\x76\x69\x64\x65\x6f\x2e\x69\x71\x69\x79\x69\x2e\x63\x6f\x6d\x2f\x3f\x6b\x65\x79\x3d\x27\x2b\x6b\x65\x79\x77\x6f\x72\x64\x73\x3b\x76\x61\x72\x20\x69\x73\x6a\x73\x6f\x6e\x3d\x27\x63\x61\x6c\x6c\x62\x61\x63\x6b\x27\x3b');
		if (keywords=='') { $('#word').hide(); return };
		$.ajax({
			url: isgo,
			dataType: 'jsonp',
			jsonp: isjson,
			beforeSend:function(){
				$('#word').append('<div class="autocomplete-suggestion">正在加载。。。</div>');
			},
			success:function(data){
				$('#word').empty().show();
				if (data.data=='')
				{
					$('#word').append('<div class="autocomplete-suggestion">小虎无法推荐与"' + keywords + '"相关的词</div>');
				}
				$.each(data.data, function(){
					$('#word').append('<div class="autocomplete-suggestion">'+ this.name +'</div>');
				})
			},
			error:function(){
				$('#word').empty().show();
				$('#word').append('<div class="autocomplete-suggestion">小虎推荐"' + keywords + '"失败</div>');
			}
		})
	})
	$(document).on('click','.autocomplete-suggestion',function(){
		var word = $(this).text();
		$('#wd').val(word);
		$('#word').hide();
		$('#submit').trigger('click');
	})		
	var clear = function(){ $('#word').hide();}
	$("input").blur(function(){			    
		 setTimeout(clear,500); 		
	})
})