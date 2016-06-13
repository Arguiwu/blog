$(function(){
	backToTop();
	categoryChange();
});
function categoryChange(){
	var lists = $("#categoryList").next().find("li");
	$(lists).each(function(i,d){
		$(d).on("click",function(){
			var cate = $(this).find("a").attr("cate");
			if(cate==="All"){
				$("#mainBox article").show();
			}else{
				$("#mainBox article").each(function(i,d){
					if($(d).attr("post-cate") !==cate ){
						$(d).hide();
					}else{
						$(d).show();
					}
				});
			}
		});
	});
};
function backToTop(){
	$("[data-toggle='tooltip']").tooltip();
	var st = $(".page-scrollTop");
	var $window = $(window);
	var topOffset;
	$window.scroll(function() {
	    var currnetTopOffset = $window.scrollTop();
	    if (currnetTopOffset > 0 && topOffset > currnetTopOffset) {
	        st.fadeIn(500);
	    } else {
	        st.fadeOut(500);
	    }
	    topOffset = currnetTopOffset;
	});
	st.click(function() {
	    $("body").animate({
	        scrollTop: "0"
	    }, 500);
	});
};
function search(){
    (function(w,d,t,u,n,s,e){w['SwiftypeObject']=n;w[n]=w[n]||function(){
        (w[n].q=w[n].q||[]).push(arguments);};s=d.createElement(t);
        e=d.getElementsByTagName(t)[0];s.async=1;s.src=u;e.parentNode.appendChild(s);
    })(window,document,'script','//s.swiftypecdn.com/install/v2/st.js','_st');
    _st('install','{{site.swiftype_searchId}}','2.0.0');
}