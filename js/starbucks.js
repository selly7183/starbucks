$(document).ready(function(){

/* 네비게이션 */
$("#gnb>ul>.gnb-nav01").on("mouseover",function(){
	$(".gnb-sub1").stop().slideDown(500);
});
$("#gnb>ul>.gnb-nav01").on("mouseout",function(){
	$(".gnb-sub1").stop().slideUp(200);
});
$("#gnb>ul>.gnb-nav02").on("mouseover",function(){
	$(".gnb-sub2").stop().slideDown(500);
});
$("#gnb>ul>.gnb-nav02").on("mouseout",function(){
	$(".gnb-sub2").stop().slideUp(200);
});

$("#gnb>ul>.gnb-nav03").on("mouseover",function(){
	$(".gnb-sub3").stop().slideDown(500);
});
$("#gnb>ul>.gnb-nav03").on("mouseout",function(){
	$(".gnb-sub3").stop().slideUp(200);
});

$("#gnb>ul>.gnb-nav04").on("mouseover",function(){
	$(".gnb-sub4").stop().slideDown(500);
});
$("#gnb>ul>.gnb-nav04").on("mouseout",function(){
	$(".gnb-sub4").stop().slideUp(200);
});

$("#gnb>ul>.gnb-nav05").on("mouseover",function(){
	$(".gnb-sub5").stop().slideDown(500);
});
$("#gnb>ul>.gnb-nav05").on("mouseout",function(){
	$(".gnb-sub5").stop().slideUp(200);
});

$("#gnb>ul>.gnb-nav06").on("mouseover",function(){
	$(".gnb-sub6").stop().slideDown(500);
});
$("#gnb>ul>.gnb-nav06").on("mouseout",function(){
	$(".gnb-sub6").stop().slideUp(200);
});


/* blossom */
$(window).ready(function(){
	$(".slogan").stop().animate({opacity:"1"},300);
	$(".cup01").stop().animate({opacity:"1"},1200);
	$(".cup02").stop().animate({opacity:"1"},2000);
	$(".cup03").stop().animate({opacity:"1"},2800);
	$(".more").stop().animate({opacity:"1"},2600);
});


/* each 구문 사용
$(window).ready(function(){
	$(".slogan").each(function(idx){	//li를 차례대로 순회하면서
		$(this).css({"display":"none"});
		$(this).delay(idx*500).fadeIn(500);
	});
	$(".cup01").each(function(idx){	//li를 차례대로 순회하면서
		$(this).css({"display":"none"});
		$(this).delay(idx*1800).fadeIn(1800);
	});
	$(".cup02").each(function(idx){	//li를 차례대로 순회하면서
		$(this).css({"display":"none"});
		$(this).delay(idx*2500).fadeIn(2500);
	});
	$(".cup03").each(function(idx){	//li를 차례대로 순회하면서
		$(this).css({"display":"none"});
		$(this).delay(idx*3500).fadeIn(3500);
	});
	$(".more").each(function(idx){	//li를 차례대로 순회하면서
		$(this).css({"display":"none"});
		$(this).delay(idx*4500).fadeIn(4500);
	});
});
*/




/* 스크롤 */
$(window).on("scroll",function(){
	var pos=$("html,body").scrollTop();
	
	if(pos>=300){
		$(".via").addClass("on");
		$(".via-txt").addClass("on");
	}else{
		$(".via").removeClass("on");
		$(".via-txt").removeClass("on");
	}

	if(pos>=1000){
		$(".cover").fadeIn(1000);
	}

	if(pos>=1500){
		$(".fav-left1").addClass("on");
		$(".fav-left2").addClass("on");
	}

	if(pos>=2200){
		$(".reserve-right").addClass("on");
		$(".look-detail-btn").addClass("on");
	}

	if(pos>=3000){
		$(".store-txt1").addClass("on");
		$(".store-txt2").addClass("on");
		$(".more5").addClass("on");
	}

	//$(".via")[pos>=700?"addClass":"removeClass"]("on");

});


/* 공지사항 */
var current=0;
var $slides=$(".line-notice-bgl dd");
$slides.css({"top":"60px"});
$slides.eq(0).css({"top":"0px"});

function fnMove(idx){
	$slides.eq(current).animate({
		top:"-60px"
	},{
		duration:500,
		start:function(){
			$slides.eq(idx).css({"top":"60px"});
			$slides.eq(idx).animate({top:"0px"});
		}
	});
	current=idx;
}

function setSlide(){
	if(current==1){
		fnMove(0);
	}else{
		fnMove(current+1);
	}
}

setInterval(setSlide, 2000);


/* top버튼 부드럽게 올라가는 효과 */
$(".logo").on("click",function(){
	event.preventDefault;
	$("html,body").stop().animate({
		scrollTop:"0px"
	},300,"swing");
});





});