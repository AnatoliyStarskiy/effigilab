window.addEventListener("load", (function() {
	if(void 0 === window.safari && window.matchMedia("(min-width: 1024px)").matches) {
		lax.init(), lax.addDriver("scrollY", (function() {
			return window.scrollY
		}));
		let e = $(".home__image-1").height() - $(".home__footer-box").height() - 1;
		lax.addElements(".home__image-1", {
			scrollY: {
				translateY: [
					["elInY", "elOutY"],
					[0, -e]
				]
			}
		}), lax.addElements(".brand__decor-1", {
			scrollY: {
				translateY: [
					["elInY", "elOutY"],
					[-180, "0"]
				]
			}
		}), lax.addElements(".brand__decor-image-2", {
			scrollY: {
				translateY: [
					["elInY", "elOutY"],
					[0, "-120"]
				]
			}
		}), lax.addElements(".brand__text-decor", {
			scrollY: {
				translateY: [
					["elInY", "elOutY"],
					[0, "-110"]
				],
				translateX: [
					["elInY", "elOutY"],
					[0, "110"]
				]
			}
		}), lax.addElements(".advantage__decor-1", {
			scrollY: {
				translateY: [
					["elInY", "elOutY"],
					[0, "-120"]
				]
			}
		}), lax.addElements(".advantage__decor-2", {
			scrollY: {
				translateY: [
					["elInY", "elOutY"],
					[-50, 0]
				]
			}
		}), lax.addElements(".advantage__decor-3", {
			scrollY: {
				translateY: [
					["elInY", "elOutY"],
					[-50, "elHeight/2.2"]
				]
			}
		}), lax.addElements(".info__decor-1", {
			scrollY: {
				translateY: [
					["elInY", "elOutY"],
					[-100, "0"]
				],
				translateX: [
					["elInY", "elOutY"],
					[100, "0"]
				]
			}
		}), lax.addElements(".info__decor-2", {
			scrollY: {
				translateY: [
					["elInY", "elOutY"],
					[-150, "0"]
				]
			}
		}), lax.addElements(".info__decor-3", {
			scrollY: {
				translateY: [
					["elInY", "elOutY"],
					[-200, "0"]
				]
			}
		}), lax.addElements(".stages-order__decor-text", {
			scrollY: {
				translateX: [
					["elInY", "elOutY"],
					[0, "-screenWidth"]
				]
			}
		}), lax.addElements(".quality__decor-1", {
			scrollY: {
				translateY: [
					["elInY", "elOutY"],
					[-120, "0"]
				],
				translateX: [
					["elInY", "elOutY"],
					[-120, "0"]
				]
			}
		}), lax.addElements(".quality__decor-2", {
			scrollY: {
				translateY: [
					["elInY", "elOutY"],
					[-100, "0"]
				]
			}
		}), lax.addElements(".quality__decor-3", {
			scrollY: {
				translateY: [
					["elInY", "elOutY"],
					[-200, "0"]
				]
			}
		}), lax.addElements(".clients__decor-text ", {
			scrollY: {
				translateX: [
					["elInY", "elOutY"],
					[0, "screenWidth"]
				]
			}
		}), lax.addElements(".certificate__decor-text", {
			scrollY: {
				translateX: [
					["elInY-120", "elOutY"],
					[500, "-screenWidth"]
				]
			}
		})
	} else $(".home__image-1").css({
		height: "120%",
		top: "-20%"
	})
})), document.addEventListener("DOMContentLoaded", (function(e) {
	if($(".form-phone").mask("+7 (999) 999-99-99"), $(".form-input__field").each((function(e, t) {
			0 !== t.value.length && $(t).siblings(".form-input__text").hide(0)
		})), $("._valid").focusout((function() {
			"text" === this.type && 0 === this.value.length || "tel" === this.type && 0 == $(this).mask("+7 (999) 999-99-99").val().length ? (0 === !$(this).siblings(".form-input__text").length ? ($(this).addClass("_required"), $(this).attr("placeholder", $(this).data("input-validation"))) : ($(this).siblings(".form-input__text").fadeIn(150), $(this).siblings(".form-input__text").addClass("_required")), $(this).siblings(".form-input__error").fadeIn(150)) : "email" === this.type ? this.validity.valid ? $(this).siblings(".form-input__check").fadeIn(150) : (0 === !$(this).siblings(".form-input__text").length && ($(this).addClass("_required"), $(this).attr("placeholder", $(this).data("input-validation"))), 0 === this.value.length ? ($(this).siblings(".form-input__text").fadeIn(150), $(this).siblings(".form-input__text").addClass("_required"), $(this).siblings(".form-input__error").fadeIn(150)) : $(this).siblings(".form-input__error").fadeIn(150)) : ($(this).siblings(".form-input__text").fadeOut(150), $(this).siblings(".form-input__text").removeClass("_required"), $(this).siblings(".form-input__check").fadeIn(150))
		})), $("._valid").click((function() {
			$(this).siblings(".form-input__text").fadeOut(150), $(this).siblings(".form-input__text").removeClass("_required"), $(this).removeClass("_required"), $(this).siblings(".form-input__check").fadeOut(150), $(this).siblings(".form-input__error").fadeOut(150)
		})), $("._valid").focus((function() {
			0 !== $(this).val().length && (0 !== !$(this).siblings(".form-input__text").length ? $(this).removeClass("_required") : ($(this).siblings(".form-input__text").fadeOut(150), $(this).siblings(".form-input__text").removeClass("_required")), $(this).siblings(".form-input__check").fadeOut(150), $(this).siblings(".form-input__error").fadeOut(150))
		})), $('form button[type="submit"]').click((function(e) {
			$(this).parents("form").find("input").each((function(e, t) {
				(t.required && "text" === t.type && 0 === t.value.length || "email" === t.type && 0 === t.value.length || "tel" === t.type && 0 === $(t).mask("+7 (999) 999-99-99").val().length) && ($(t).siblings(".form-input__text").addClass("_required"), $(t).siblings(".form-input__error").fadeIn(150), $(t).focus((function() {
					$(t).siblings(".form-input__text").fadeOut(150), $(t).siblings(".form-input__text").removeClass("_required"), $(t).siblings(".form-input__error").fadeOut(150), $(t).removeClass("_required")
				})))
			}))
		})), $(".form-input__field:not(._valid)").click((function() {
			$(this).siblings(".form-input__text").hide(0)
		})), $(".form-input__field:not(._valid)").focusout((function() {
			("text" === this.type && 0 === this.value.length || "email" === this.type && !this.validity.valid || "tel" === this.type && 0 === $(this).mask("+7 (999) 999-99-99").val().length) && $(this).siblings(".form-input__text").show(0)
		})), $("form").submit((function() {
			const e = $(this);
			e.find("button").prop("disabled", !0), e.find(".form-send__message").fadeIn(350);
			var t = new FormData;
			return e.find(":input[name]").each((function(i, n) {
				if("file" == n.type) {
					var s = e.find('input[type="file"]')[0].files;
					for(i = 0; i < s.length; i++) t.append("files[]", s[i])
				} else {
					var a = $(this);
					a.val() && t.append(a.attr("name"), a.val())
				}
			})), $.ajax({
				url: "form/form.php",
				type: "POST",
				data: t,
				contentType: !1,
				cache: !1,
				processData: !1,
				success: function(t) {
					e.find(".form-send__loading").hide(), e.find(".form-send__success").show(), e.trigger("reset"), setTimeout((function() {
						e.find(".form-send__message").fadeOut()
					}), 3500), $(".form-input__field").siblings(".form-input__text").fadeIn(150), $(".form-input__field").siblings(".form-input__check").fadeOut(150), e.find("button").prop("disabled", !1)
				},
				error: function(t, i, n) {
					e.find(".form-send__loading").hide(), e.find(".form-send__error").show(), setTimeout((function() {
						e.find(".form-send__message").fadeOut()
					}), 3500), e.find("button").prop("disabled", !1)
				}
			}), !1
		})), "loading" in HTMLImageElement.prototype) {
		document.querySelectorAll("img.lazy").forEach(e => {
			e.src = e.dataset.src
		})
	} else {
		(new LazyLoad).update()
	}

	function t(e, t) {
		$(e).click((function() {
			$(t).show(0), $(t).addClass("_start"), setTimeout((function() {
				$(t).addClass("_end")
			}), 750), setTimeout((function() {
				$("body").css("overflow", "hidden")
			}), 750)
		}))
	}

	function i(e) {
		return e > 9 ? e : "0" + e
	}

	function n(e) {
		return {
			autoHeight: !0,
			lazy: {
				loadPrevNext: !0,
				loadPrevNextAmount: 2
			},
			simulateTouch: !1,
			effect: "fade",
			fadeEffect: {
				crossFade: !0
			},
			navigation: {
				nextEl: e + " .swiper-button-next",
				prevEl: e + " .swiper-button-prev"
			},
			pagination: {
				el: e + " .swiper-pagination",
				type: "fraction",
				formatFractionCurrent: i,
				formatFractionTotal: i,
				renderFraction: function(e, t) {
					return '<span class="' + e + '"></span><span class="swiper-pagination-line"></span><span class="' + t + '"></span>'
				}
			},
			on: {
				init: function() {
					this.slides.forEach((function(e, t) {
						$(e).find(".slider__number").text(i(t + 1))
					}))
				}
			}
		}
	}
	$(".menu-toggle").on("click", (function() {
		$("#menu-modal").show(0), $("#menu-modal").addClass("_active"), setTimeout((function() {
			anime({
				targets: ".menu-modal__list-item",
				translateX: [400, 0],
				opacity: {
					value: [0, 1],
					duration: 250
				},
				duration: 1250,
				delay: (e, t) => 150 * t
			})
		}), 980)
	})), $(".menu-modal__close").on("click", (function() {
		$("#menu-modal").removeClass("_active"), setTimeout((function() {
			$("#menu-modal").hide(0)
		}), 1e3)
	})), $(".menu-modal").mouseup((function(e) {
		const t = $(".menu-modal__wrapper");
		t.is(e.target) || 0 !== t.has(e.target).length || (t.parent().removeClass("_active"), setTimeout((function() {
			t.parent().hide(0)
		}), 1e3))
	})), $(".menu-modal__link").click((function() {
		var e = $(this).attr("href");
		return $("html, body").animate({
			scrollTop: $(e).offset().top + parseInt($(e).css("padding-top")) - 20 + "px"
		}, 250), setTimeout((function() {
			$("#menu-modal").removeClass("_active")
		}), 250), setTimeout((function() {
			$("#menu-modal").hide(0)
		}), 1250), !1
	})), t(".modal-open", "#modal"), t(".modal-politic-open", "#modal-politics"), $(".modal__close").click((function() {
		const e = $(this).parents(".modal");
		e.removeClass("_end"), setTimeout((function() {
			e.removeClass("_start")
		}), 800), setTimeout((function() {
			e.hide(0)
		}), 1600), setTimeout((function() {
			$("body").css("overflow", "")
		}), 650)
	})), $(".modal").mouseup((function(e) {
		const t = $(this),
			i = $(this).find(".modal__box");
		!i.is(e.target) && 0 === i.has(e.target).length && $(this).hasClass("_start _end") && (t.removeClass("_end"), setTimeout((function() {
			t.removeClass("_start")
		}), 800), setTimeout((function() {
			t.hide(0)
		}), 1600), setTimeout((function() {
			$("body").css("overflow", "")
		}), 750))
	}));
	const s = new Swiper(".stages-order .slider", n(".stages-order")),
		a = new Swiper(".clients .slider", n(".clients"));
	new Swiper(".certificate__slider", {
		watchOverflow: !0,
		simulateTouch: !1,
		lazy: {
			loadPrevNext: !0
		},
		breakpoints: {
			1024: {
				slidesPerView: 2,
				spaceBetween: 20
			}
		},
		navigation: {
			nextEl: ".certificate__slider-btn.swiper-button-next",
			prevEl: ".certificate__slider-btn.swiper-button-prev"
		}
	});

	function o(e, t) {
		$(e).click((function(e) {
			e.target.type || e.target.classList.contains("slider__aside-content") || t.slideNext()
		}))
	}
	o(".reviews-slider__item", new Swiper(".reviews-slider", {
		watchOverflow: !0,
		simulateTouch: !1,
		loop: !0,
		lazy: {
			loadPrevNext: !0
		},
		pagination: {
			el: ".swiper-pagination",
			type: "bullets",
			clickable: !0,
			renderBullet: function(e, t) {
				return '<span class="' + t + ' trigger"></span>'
			}
		},
		navigation: {
			nextEl: ".reviews-slider__btn.swiper-button-next",
			prevEl: ".reviews-slider__btn.swiper-button-prev"
		}
	})), o(".stages-order .swiper-slide", s), o(".clients .swiper-slide", a), window.matchMedia("(max-width: 1023.9px)").matches && setTimeout((function() {
		$(".reviews-slider__btn").css("top", $(".reviews-slider__image").height() / 2 + 30 + "px")
	}), 800), window.addEventListener("resize", (function(e) {
		window.matchMedia("(max-width: 1023.9px)").matches && setTimeout((function() {
			$(".reviews-slider__btn").css("top", $(".reviews-slider__image").height() / 2 + 30 + "px")
		}), 800)
	})), $(".scroll").click((function() {
		var e = $(this).attr("href");
		return $("html, body").animate({
			scrollTop: $(e).offset().top + parseInt($(e).css("padding-top")) - 20 + "px"
		}), !1
	})), $(".clients .slider__aside-content").click((function() {
		let e = $(this).data("zoom");
		$(".zoom-image").fadeIn(400), $(".zoom-image__image").attr("src", e)
	})), $(".zoom-image").click((function() {
		$(this).fadeOut(400), setTimeout((function() {
			$(".zoom-image__image").attr("src", "images/lazyload.png")
		}), 400)
	})), $(document).keydown((function(e) {
		27 == e.keyCode && $(".zoom-image").is(":visible") && ($(".zoom-image").fadeOut(400), setTimeout((function() {
			$(".zoom-image__image").attr("src", "images/lazyload.png")
		}), 400))
	})), $(".order-header__btn").on("click", (function() {
		$(".order__box").slideToggle(), $(".order-header__icon .icon").toggleClass("_active")
	}));
	var l = $(".cursor"),
		r = 0,
		d = 0,
		u = 0,
		c = 0;
	TweenMax.to({}, .016, {
		repeat: -1,
		onRepeat: function() {
			r += (u - r) / 9, d += (c - d) / 9, TweenMax.set(l, {
				css: {
					left: u,
					top: c
				}
			})
		}
	}), $(document).on("mousemove", (function(e) {
		u = e.clientX, c = e.clientY
	})), $(".trigger").on("mouseenter", (function() {
		l.addClass("active")
	})), $(".trigger").on("mouseleave", (function() {
		l.removeClass("active")
	})), $(".trigger-orange").on("mouseenter", (function() {
		l.addClass("active orange")
	})), $(".trigger-orange").on("mouseleave", (function() {
		l.removeClass("active orange")
	})), $(".trigger-orange-bg").on("mouseenter", (function() {
		l.addClass("orange-bg")
	})), $(".trigger-orange-bg").on("mouseleave", (function() {
		l.removeClass("orange-bg")
	})), $(".trigger-dark-bg").on("mouseenter", (function() {
		l.addClass("dark-bg")
	})), $(".trigger-dark-bg").on("mouseleave", (function() {
		l.removeClass("dark-bg")
	}))
}));




$(function() {
  $('.intro').addClass('go');

  $('.reload').click(function() {
    $('.intro').removeClass('go').delay(200).queue(function(next) {
      $('.intro').addClass('go');
      next();
    });

  });
})


 //menu
	function headerBehaviour() {
		if ($(window).scrollTop() > 0) {
			$('.layout-header').addClass('active');
			$('.logo__icon').addClass('active');
			$('.header__btn').addClass('active');
			$('.layout-header .home__page-number').addClass('active');
			$('.header__menu-toggle').addClass('active');

			
		}
		else {
			$('.layout-header').removeClass('active');
			$('.logo__icon').removeClass('active');
			$('.header__btn').removeClass('active');
			$('.layout-header .home__page-number').removeClass('active');
			$('.header__menu-toggle').removeClass('active');

		}
	}

	headerBehaviour();
	$(window).resize(function () {
		headerBehaviour();
	});
	$(window).bind('scroll', function () {
		headerBehaviour();
	});

	var btnToTop = $('#back-to-top');

	$(window).scroll(function() {
		if ($(window).scrollTop() > 300) {
			btnToTop.addClass('show');
		} else {
			btnToTop.removeClass('show');
		}
	});
	
	
	
	var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


	
	