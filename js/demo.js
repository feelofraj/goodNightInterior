$(document).ready(function() {
//Index Banner Jquery
			// parameters
			// image height
		
			var images_height = '650px';
			// array of images
			var images_url = [
				'images/banner1.jpg',
				'images/banner2.jpg',
				'images/banner3.jpg'
			];
			var images_count = images_url.length;

			// create nodes
			for (var j = 0; j < images_count + 1; j++) {
				$('.banner ul').append('<li></li>')
			}

			// pagination
			for (var j = 0; j < images_count; j++) {
				if (j == 0) {
					$('.banner ol').append('<li class="current"></li>')
				} else {
					$('.banner ol').append('<li></li>')
				}
			}

			// convert images into backgrounds
			$('.banner ul li').css('background-image', 'url(' + images_url[0] + ')');

			$.each(images_url, function (key, value) {
				$('.banner ul li').eq(key).css('background-image', 'url(' + value + ')');
			});

			$('.banner').css('height', images_height);

			$('.banner ul').css('width', (images_count + 1) * 100 + '%');

			$('.banner ol').css('width', images_count * 20 + 'px');
			$('.banner ol').css('margin-left', -images_count * 20 * 0.5 - 10 + 'px');

			var num = 0;

			var window_width = $(window).width();

			$(window).resize(function () {
				window_width = $(window).width();
				$('.banner ul li').css({ width: window_width });
				clearInterval(timer);
				nextPlay();
				timer = setInterval(nextPlay, 2000);
			});

			$('.banner ul li').width(window_width);

			// pagination dots
			$('.banner ol li').mouseover(function () {
				$(this).addClass('current').siblings().removeClass('current');
				var i = $(this).index();
				//console.log(i);
				$('.banner ul').stop().animate({ left: -i * window_width }, 500);
				num = i;
			});

			// autoplay
			var timer = null;

			function prevPlay() {
				num--;
				if (num < 0) {
					$('.banner ul').css({ left: -window_width * images_count }).stop().animate({ left: -window_width * (images_count - 1) }, 500);
					num = images_count - 1;
				} else {
					$('.banner ul').stop().animate({ left: -num * window_width }, 500);
				}
				if (num == images_count - 1) {
					$('.banner ol li').eq(images_count - 1).addClass('current').siblings().removeClass('current');
				} else {
					$('.banner ol li').eq(num).addClass('current').siblings().removeClass('current');

				}
			}

			function nextPlay() {
				num++;
				if (num > images_count) {
					$('.banner ul').css({ left: 0 }).stop().animate({ left: -window_width }, 500);
					num = 1;
				} else {
					$('.banner ul').stop().animate({ left: -num * window_width }, 500);
				}
				if (num == images_count) {
					$('.banner ol li').eq(0).addClass('current').siblings().removeClass('current');
				} else {
					$('.banner ol li').eq(num).addClass('current').siblings().removeClass('current');

				}
			}

			timer = setInterval(nextPlay, 2000);

			// auto pause on mouse enter
			$('.banner').mouseenter(function () {
				clearInterval(timer);
				$('.banner i').fadeIn();
			}).mouseleave(function () {
				timer = setInterval(nextPlay, 2000);
				$('.banner i').fadeOut();
			});

			// goto next
			$('.banner .right').click(function () {
				nextPlay();
			});

			// back to previous
			$('.banner .left').click(function () {
				prevPlay();
			});

	// Index script 3 Window onload 
	$(window).load(function () {
		$('.flexslider').flexslider({
			animation: "slide",
			start: function (slider) {
				$('body').removeClass('loading');
			}
		});
	});

//Common Page Load Script 
	
	//Preloader 
	document.getElementById("loader").style.display = "none" ;
	document.getElementById("loadContent").style.display = "block" ;
	//Common script & Index 1
addEventListener("load", function () { setTimeout(hideURLbar, 0); }, false);
function hideURLbar() { window.scrollTo(0, 1); }

$(".scroll").click(function (event) {
	event.preventDefault();
	$('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
});
$().UItoTop({ easingType: 'easeOutQuart' });


var i = 0;
function change() {
	var doc = document.getElementById("popupClick");
	var color = ["#c8d1ca", "#cecace"];
	doc.style.backgroundColor = color[i];
	i = (i + 1) % color.length;
}
setInterval(change, 1000);

window.onscroll = function () { stickys() };
var header = document.getElementById("myheader");
var sticky = header.offsetTop;
function stickys() {
	if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}
$().UItoTop({ easingType: 'easeOutQuart' });

//Counter In About Page

	$('.counter').counterUp({
		delay: 1,
		time: 1000
	});


	/* Simple Style */
	$('.wrapper-simple input[type=submit]').toggle(function(){
		
		$('.arrow2').hide();
		$('.wrapper-simple').animate({'width':'300px'})
				  .end().find('.wrapper-simple input[type=text]').animate({'width': '250px'})
				  .end().find('.wrapper-simple img').animate({'marginLeft': '-5px'})
				  .end().find(this).animate({'marginLeft':'22em'}).attr('value', 'CANCEL');
		
	}, function() {
		
		$('.arrow2').show();
		$('.wrapper-simple').animate({'width':'60px'})
				  .end().find('.wrapper-simple input[type=text]').animate({'width': '1px'})
				  .end().find('.wrapper-simple img').animate({'marginLeft': '0'})
				  .end().find(this).animate({'marginLeft':'0'}).attr('value', '');
		
	});
	
	/* Cube Style */
	$('.search-button1').click(function() {
		
			
			$('.content-wrapper1').addClass('switch-show');
			$('.search-box1').addClass('show-search-box');
			
			setTimeout(function(){
		
				$('.content-wrapper1').removeClass('switch-show');
				$('.search-button1').removeClass('show-search-button').addClass('hide-search-button');
				$('.search-box1').addClass('showed-search-box');
			
			},480);
	});
	
	$('.search-box1 img').click(function() {
		
		$('.search-button1').removeClass('hide-search-button');
		$('.search-box1').addClass('hidden-search-box');
		$('.content-wrapper1').addClass('switch-hide');
		
			
			setTimeout(function(){
		
				$('.content-wrapper1').removeClass('switch-hide');
				$('.search-button1').removeClass('show-search-button');
				$('.search-box1').removeClass('show-search-box showed-search-box hidden-search-box');
			
			},480);
			
	});
	
	/* Cube Style With Animate */
	$('.search-button2').click(function() {
		
		$('.arrow').hide();
		
		$(this).stop().animate({'width':'300px'}, 500, function() {
			
			$('.content-wrapper2').addClass('switch-show');
			$('.search-box2').addClass('show-search-box');
			
			setTimeout(function(){
		
				$('.content-wrapper2').removeClass('switch-show');
				$('.search-button2').removeClass('show-search-button').addClass('hide-search-button');
				$('.search-box2').addClass('showed-search-box');
			
			},480);
			
		});
	});
	
	$('.search-box2 img').click(function() {
		
		
		$('.search-button2').removeClass('hide-search-button');
		$('.search-box2').addClass('hidden-search-box');
		$('.content-wrapper2').addClass('switch-hide');
		
		$('.search-button2').addClass('show-search-button').stop().delay(500).animate({'width':'50px'}, 500, function() {
			
			$('.content-wrapper2').removeClass('switch-hide');
			$('.search-button2').removeClass('show-search-button');
			$('.search-box2').removeClass('show-search-box showed-search-box hidden-search-box');
			
			$('.arrow').show();
			
		});
	});

	if(!Modernizr.input.placeholder){
		$("input").each( function(){
				
				thisPlaceholder = $(this).attr("placeholder");
				
				if(thisPlaceholder!=""){
					
					$(this).val(thisPlaceholder);
					
					$(this).focus(function(){ if($(this).val() == thisPlaceholder) $(this).val(""); });
					$(this).blur(function(){ if($(this).val()=="") $(this).val(thisPlaceholder); });
				}
		});
	}

	$("#sendMail").submit(function (event) {

        /* stop form from submitting normally */
        event.preventDefault();

        /* get the action attribute from the <form action=""> element */
        var $form = $(this),
            url = $form.attr('action');
        var parameters = { name: $('#Name').val(), subject: $('#Subject').val(), email: $('#Email').val(), message: $('#Message').val(), telephone: $('#Telephone').val(), mailSubject: "Request from Good Night Interiors", toMail: "goodnightinteriors@gmail.com" };
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxdQUSLUHH1g9V3qlYqzd3ZPCBXjIIkD_QOqAsNOEsyLNWRADXI/exec",
            method: "POST",
            data: parameters
        })
            .done(function (data) {

                $('#error-msg').css('color', 'green');
                $('#error-msg').html('Email sent successfully.');
                location.reload();
            })
            .fail(function (jqXHR, textStatus, errorThrown) {

                $('#error-msg').css('color', 'red');
                $('#error-msg').html('Falied: Please try again later or contact us.');
            });
        setTimeout(function () {
            location.reload();
        }, 10000);

    });
    $("#enquiryMail").submit(function (event) {

        /* stop form from submitting normally */
        event.preventDefault();

        /* get the action attribute from the <form action=""> element */
        var $form = $(this),
            url = $form.attr('action');
        var parameters = { name: $('#name').val(), email: $('#email').val(), message: $('#message').val(), telephone: $('#contact').val(), mailSubject: "Request from Good Night Interiors", toMail: "goodnightinteriors@gmail.com" };
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxdQUSLUHH1g9V3qlYqzd3ZPCBXjIIkD_QOqAsNOEsyLNWRADXI/exec",
            method: "POST",
            data: parameters
        })
            .done(function (data) {

                $('#enquiry-error-msg').css('color', 'green');
                $('#enquiry-error-msg').html('Email sent successfully.');
                location.reload();
            })
            .fail(function (jqXHR, textStatus, errorThrown) {

                $('#error-msg').css('color', 'red');
                $('#error-msg').html('Falied: Please try again later or contact us.');
            });
        setTimeout(function () {
            location.reload();
        }, 6000);

    });
});

function getMobileOperatingSystem(msgContent) {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var msg = "I am interested in your product. Call me";
    if (msgContent) {
        msg = msgContent;
    }
    var os = "sms:+917092511553?body=" + msg;
    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        os = "sms:+917092511553&body=" + msg;
    }
    location.href = os;
}
