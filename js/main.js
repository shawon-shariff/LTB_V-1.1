$(document).ready(function(){
	
	$("#search_1").click(function(){
		$(".search_icon_rope").toggleClass("search_icon_rope_new_pos")
	});
	$("#search_1_BN").click(function(){
		$(".search_icon_rope").toggleClass("search_icon_rope_new_pos")
	});

	$("#lang_EN").click(function(){
		$("#lang_BN").css("display","inline-block");
		$("#lang_EN").css("display","none");
		$(".bangla").css("display","none");
		$(".english").css("display","inline-block");
	});
	$("#lang_BN").click(function(){
		$("#lang_EN").css("display","inline-block");
		$("#lang_BN").css("display","none");
		$(".english").css("display","none");
		$(".bangla").css("display","inline-block");
	});

});