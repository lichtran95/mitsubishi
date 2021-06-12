$(document).ready(function(){
	var swiperHeroHome = new Swiper(".swiperHeroHome", {
		pagination: {
			el: ".swiper-pagination",
		},
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
	});
	var swiperImageProduct = new Swiper(".swiperImageProduct", {
		pagination: {
			el: ".swiper-pagination",
		},
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
	});

	// tabs
	openInfoExtend = (evt, infoExtend) => {
		var i, tabcontent, tablinks;
		tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
		}
		tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
		}
		document.getElementById(infoExtend).style.display = "block";
		evt.currentTarget.className += " active";
	}
	
	// active menu mobile
	var hamberger = document.getElementsByClassName("hamberger")[0];
	var nav = document.getElementsByClassName("nav")[0];
	hamberger.addEventListener("click",function(){
		nav.classList.toggle('is-show');
		hamberger.classList.toggle('is-active');
	})
});