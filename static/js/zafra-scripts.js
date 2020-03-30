/*global $, jQuery, alert*/
(function ($) {
	"use strict";

	/**********************************************************/
	/*								 Const declarations											*/
	/**********************************************************/

	const ZAFRA_LANG_COOKIE_NAME = 'zafra-lang';
	const HANDLED_LOCALES = ["es", "en", "fr"];
	const DEFAULT_LOCALE = "es";

	/**********************************************************/
	/*								 Wunderkind functions										*/
	/**********************************************************/

	function vossenPortfolio() {
		var vosPortfolio = $('.vossen-portfolio'),
			initFilter = $('.vossen-portfolio-filters'),
			vossenFilters = $('.vossen-portfolio-filters li'),
			portfolioItems = $('.vossen-portfolio > div'),
			initialCat;

		// Init Filter to class except *all
		initFilter.each(function () {
			var dataOption = $(this).attr('data-initial-filter');
			$(this).attr('data-initial-filter', '.' + dataOption);
			if ($(initFilter).data('initial-filter') === '.*') {
				$(this).attr('data-initial-filter', '*');
			}
		});
		// Filters data to class except first
		vossenFilters.not(':first').each(function () {
			var dataOption = $(this).attr('data-filter');
			$(this).attr('data-filter', "." + dataOption);
		});
		// Items data to class
		portfolioItems.each(function () {
			var dataOption = $(this).attr('data-filter');
			$(this).addClass(dataOption);
		});
		// Animate Items
		portfolioItems.waypoint(function () {
			portfolioItems.each(function (i) {
				$(this).addClass('reveal');
			});
		}, { offset: '100%', triggerOnce: true });
		initialCat = $('.vossen-portfolio-filters').attr('data-initial-filter');
		// Add active class to filter
		$('.vossen-portfolio-filters li[data-filter="' + initialCat + '"]').addClass('active');
		// Init Isotope Filters
		vossenFilters.on('click', function () {
			$('.vossen-portfolio-filters li.active').removeClass('active');
			$(this).addClass('active');
			var filterValue = $(this).attr('data-filter');
			vosPortfolio.isotope({
				filter: filterValue
			});
		});
		// Init Isotope
		var $grid = vosPortfolio.isotope({
			itemSelector: '.vossen-portfolio > div',
			percentPosition: true,
			filter: initialCat,
			masonry: {
				columnWidth: '.vossen-portfolio > div'
			}
		});
		$grid.imagesLoaded().progress(function () {
			$grid.isotope('layout');
		});
	}

	function vossenBlogGrid() {
		var vosPortfolio = $('.vossen-blog-grid'),
				portfolioItems = $('.vossen-blog-grid > div');
		portfolioItems.each(function () {
				var dataOption = $(this).attr('data-filter');
				$(this).addClass(dataOption);
		});
		portfolioItems.waypoint(function () {
				portfolioItems.each(function (i) {
					$(this).addClass('reveal');
				});
		}, { offset: '100%', triggerOnce: true });
		vosPortfolio.isotope({
				itemSelector: '.vossen-blog-grid > div',
				percentPosition: true,
				masonry: {
						columnWidth: '.vossen-blog-grid > div'
				}
		});
		// Init Isotope
		var $bloggrid = vosPortfolio.isotope({
				itemSelector: '.vossen-blog-grid > div',
				percentPosition: true,
				masonry: {
						columnWidth: '.vossen-blog-grid > div'
				}
		});
		$bloggrid.imagesLoaded().progress( function() {
				$bloggrid.isotope('layout');
		});
	}

	$(window).resize(function () {
		setTimeout(function () {
			$('.vossen-portfolio-filters .active').trigger('click');
		}, 600);
	});

	function countUp() {
		$('#fun-facts').waypoint(function () {
			$('.counter h1').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({ countNum: $this.text() }).animate({
					countNum: countTo
				}, {
					duration: 1700,
					easing: 'linear',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
						//alert('finished');
					}
				});
			});
		}, { offset: '100%', triggerOnce: true });
	}

	/**********************************************************/
	/*									 Utility Functions										*/
	/**********************************************************/

	function setCookie(name, value, days) {
		var expires = "";
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = "; expires=" + date.toUTCString();
		}
		document.cookie = name + "=" + (value || "") + expires + "; path=/";
	}

	function getCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
		}
		return null;
	}

	function getLocale() {

		// If lang is set in a cookie, return it
		const cookieLocale = getCookie(ZAFRA_LANG_COOKIE_NAME);
		if (cookieLocale && HANDLED_LOCALES.indexOf(cookieLocale) != -1) {
			return cookieLocale;
		}

		// Else return the user navigator's lang
		const currentLocale = (navigator.language || navigator.userLanguage).substring(0, 2);
		const validLocale = HANDLED_LOCALES.indexOf(currentLocale) == -1 ? DEFAULT_LOCALE : currentLocale;
		return validLocale;
	}

	/**********************************************************/
	/*									 Init Facebook News										*/
	/**********************************************************/

	// Init FB
	window.fbAsyncInit = function () {
		window.FB.init({
			appId: '284599695841652',
			autoLogAppEvents: true,
			xfbml: true,
			version: 'v6.0'
		});

		initNews();
	};

	const MONTHS = {
		"es": ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'],
		"en": ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
		"fr": ['JAN', 'FEV', 'MAR', 'AVR', 'MAI', 'JUIN', 'JUIL', 'AOÛT', 'SEP', 'OCT', 'NOV', 'DIC']
	};
	const BLOG_ITEM_TEMPLATE =
		'<div class="col-md-4 col-sm-6 reveal">\
				<div class="blog-grid-img">\
						<a href="{postUrl}" target="_blank">\
								<img src="{imgUrl}" class="img-responsive width100" alt="#">\
						</a>\
				</div>\
				<div class="blog-grid-content">\
						<time><span>{date}</span><span>{month}</span></time>\
						<div class="post-header">\
								<a href="{postUrl}">\
										<h3><strong>Se queda en tí</strong></h3>\
										</a>\
						</div>\
						<a href="{postUrl}">\
							<p>{message}</p>\
						</a>\
				</div>\
			</div>';
	const IMG_URL_DEFAULT = 'https://scontent.feoh2-1.fna.fbcdn.net/v/t31.0-8/p960x960/14680949_1404158372945486_9183689898673768067_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=jUdBHCeCbqoAX-jlDUR&_nc_ht=scontent.feoh2-1.fna&_nc_tp=6&oh=f1af880f260c285540167df603fc2689&oe=5E8FD556';
	const MAX_NEWS_COUNT = 6;
	const FBAT = 'EAAEC14fGGXQBAPyseRxvSJt2xfcZBS9LG2xc9VZCTbxPjOqYxc19tc28VKtqZCHzLwdk8vZB9ygIjQF3uWYZAg82hqfUJqEkUagBmWZABoUY16CokJ3B25bc3n5itZAwYiznaWqJrBEelZCdkPH2PdYkZAJ0aQuGyhrZAwNUtHFE5sdw5bD2QbNjlgHyhUuvu9CKAZD';

	// Creates a blog item div and adds it to the page
	function createNewsAndPublish(post) {

		if (!post.message) {
			return 0;
		}

		// Get template
		var newsHtml = BLOG_ITEM_TEMPLATE;

		// Fill image
		if (post.full_picture) {
			newsHtml = newsHtml.replace('{imgUrl}', post.full_picture);
		} else {
			newsHtml = newsHtml.replace('{imgUrl}', IMG_URL_DEFAULT);
		}

		// Fill message
		var message = '';
		if (post.message) {
			message = post.message.replace(/\n/g, '<br>');
		}
		newsHtml = newsHtml.replace('{message}', message);

		// Fill date
		const locale = getLocale();
		const createdTime = new Date(post.created_time);
		newsHtml = newsHtml.replace('{month}', MONTHS[locale][createdTime.getMonth()]);
		newsHtml = newsHtml.replace('{date}', createdTime.getDate());

		// Fill URL
		newsHtml = newsHtml.split('{postUrl}').join(post.permalink_url);

		// Publish news
		$('#newsDiv').append(newsHtml);

		return 1;
	}

	// Get facebook page feed
	function initNews() {
		window.FB.api(
			'/reservanaturalzafra/feed?access_token=' + FBAT,
			'GET',
			{ "limit": "20", "fields": "full_picture,id,message,created_time,permalink_url,status_type" },
			function (response) {

				// console.log(response);

				if (response.error) {
					console.error(response.error.message);
					return;
				}

				// Get posts
				var posts = response.data;

				// Generate HTML news divs
				var count = 0, i = 0;
				while (count < MAX_NEWS_COUNT && i < posts.length) {
					count += createNewsAndPublish(posts[i]);
					i++;
				}

				if (count > 0) {
					$('#news').show();
					$('#newsLink').show(); 
					vossenBlogGrid();
				}
			}
		);
	}

	/**********************************************************/
	/*										 Init portfolio											*/
	/**********************************************************/

	const PORTFOLIO_FILTER_TEMPLATE = '<li data-filter="{filter}" data-lang-key="common.portfolio.filter.{filter}"></li>';
	const PORTFOLIO_ITEM_TEMPLATE =
		'<!-- Portfolio Item -->\
		<div class="{class}" data-filter="{filters}">\
				<a href="#">\
						<div class="portfolio-item">\
								<div class="item-caption">\
										<h4>{title}</h4>\
										<p>{subtitle}</p>\
								</div>\
								<div class="item-image">\
									<img src="/static/img/portfolio/{filename}" />\
								</div>\
						</div>\
				</a>\
		</div>';

	const SIZE_1X = 'col-md-3 col-sm-6';
	const SIZE_2X = 'col-md-6 col-sm-12';

	const PORTFOLIO_CONF_URL = "static/img/portfolio/conf/conf.json";

	function initPortfolio (images, portfolioDiv, isIndex) {
		for (var i in images) {
			var portfolioItem = PORTFOLIO_ITEM_TEMPLATE;

			var image = images[i];

			if (isIndex && !image.showOnIndex) {
				continue;
			}

			portfolioItem = portfolioItem.replace('{filters}', image.categories.map(categorie => categorie.split(' ').join('').toLowerCase()).join(' '));
			portfolioItem = portfolioItem.replace('{title}', image.title);
			portfolioItem = portfolioItem.replace('{subtitle}', image.subtitle);
			portfolioItem = portfolioItem.replace('{filename}', i);

			var clazz = '';
			if (image.size == 2) {
				clazz += SIZE_2X;
			} else {
				clazz += SIZE_1X;
			}

			if (image.landscape) {
				clazz += ' tall';
			}
			
			portfolioItem = portfolioItem.replace('{class}', clazz);

			portfolioDiv.append(portfolioItem);
		}
	}

	const indexPortfolio = $('#indexPortfolio');
	const fullPortfolio = $('#fullPortfolio');
	console.log(indexPortfolio);
	console.log(fullPortfolio);

	if (indexPortfolio.length || fullPortfolio.length) {

		$.get(PORTFOLIO_CONF_URL, function (data) {
			if (data.error) {
				console.log(error);
				return;
			}

			const images = data.images;
			const categories = data.categories;

			// Generate filters
			const portfolioFilterDiv = $('#portfolioFilters');
			for (var i in categories) {
				var filterLi = PORTFOLIO_FILTER_TEMPLATE;
				filterLi = filterLi.split('{filter}').join(categories[i].split(' ').join('').toLowerCase());

				portfolioFilterDiv.append(filterLi);
			}

			// Generate image divs

			if (indexPortfolio.length) {
				initPortfolio(images, indexPortfolio, true);
			} else {
				initPortfolio(images, fullPortfolio, false);
			}
			$('#portfolio').show();
			vossenPortfolio();

		});

	}

	/**********************************************************/
	/*									 			Lang module											*/
	/**********************************************************/

	const LANG_FILE_URL = "static/lang/lang.json";
	const locale = getLocale();

	// Set lang text in world icon badge
	$('#langBadge').html(locale.toUpperCase());

	// Set language switch actions
	$('#langEs').click(function () {
		setCookie(ZAFRA_LANG_COOKIE_NAME, "es", 365);
		location.reload()
	});
	$('#langEn').click(function () {
		setCookie(ZAFRA_LANG_COOKIE_NAME, "en", 365);
		location.reload()
	});
	$('#langFr').click(function () {
		setCookie(ZAFRA_LANG_COOKIE_NAME, "fr", 365);
		location.reload()
	});

	// Load language file
	$.get(LANG_FILE_URL, function (data) {
		if (data.error) {
			console.log(error);
			return;
		}

		// Replace all lang keys with translated text
		$("[data-lang-key]").each(function() {
			var attr = $(this).data("lang-attr");
			var key = $(this).data("lang-key");

			var value = key;
			if (data[key] && data[key][locale]) {
				value = data[key][locale];
			} else if (data[key] && data[key][DEFAULT_LOCALE]) {
				value = data[key][DEFAULT_LOCALE];
			}

			if (attr) {
				$(this).attr(attr, value);
			} else {
				$(this).html(value);
			}
		});

	});

	/**********************************************************/
	/*				 Calculate years from creation									*/
	/**********************************************************/
	const yearElement = $('#yearsFromCreation');

	if (yearElement) {
		yearElement.attr('data-count', new Date().getFullYear() - 2008);
		countUp();
	}

}(jQuery));
