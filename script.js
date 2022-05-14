$(document).ready(function(){
	$("#nav-icon").click(function(){
		$("#mobile-menu").collapse('toggle');
		$("#mobile-menu").addClass("animated slideInRight faster");
	});
});

// typing animation
$(document).ready(function(){
	var string = "BE STYLISH";
	var i=0;
	if(i<string.length){
		setInterval(function(){
			document.querySelector(".add-header").innerHTML += string.charAt(i);
			i++
		},300)
	}
	 
});
// search box collapse

$(document).ready(function(){
	$("#search-icon").click(function(){
		$("#search-box").collapse('toggle')
	});
	$("#search-box").on('show.bs.collapse',function(){
		$("#header-slider h1").css({marginTop:'50px'});
	});
	$("#search-box").on('hide.bs.collapse',function(){
		$("#header-slider h1").css({marginTop:'0'});
	});
});

// client slider
$(document).ready(function(){
	$("#next-client").click(function(){
		$("#client-slider").carousel('next');
	});
	$("#prev-client").click(function(){
		$("#client-slider").carousel('prev');
	});
});

// num animate
$(window).scroll(function(){
	var value = $("#people-say").attr('class');
	if(value.indexOf("animated") != -1){
		animation();
	}
});
function animation(){
$(document).ready(function(){
	var num = 0;
	var repeat = setInterval(function(){
		num += 1;
		$("#num-one").html(num+"+");
		if(num == 510){
		clearInterval(repeat);
	}
	});
	
});

 $(document).ready(function(){
 	var num  = 0;
 	var repeat = setInterval(function(){
 		num = num+1
 		$("#num-two").html(num+"+");
 		if(num == 555){
 			clearInterval(repeat)
 		}
 	});
 });
 $(document).ready(function(){
 	var num = 0;
 	var repeat = setInterval(function(){
 		num += 1;
 		$("#num-three").html(num+"+");
 		if(num == 376){
 			clearInterval(repeat)
 		}
 	});
 });
 $(document).ready(function(){
 	var num = 0;
 	var repeat = setInterval(function(){
 		num = num+1;
 		$("#num-four").html(num+"+");
 		if(num == 168){
 			clearInterval(repeat);
 		}
 	})
 });
}