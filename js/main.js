var app = angular.module('fullApp', []);
app.controller('appCtrl', function($scope, $document) {

  $scope.productCardInfo = [
    {
      title: 'Jura Capresso Nespresso Service Tool Bit for Magnetic Handle',
      price: '12.95',
      description: 'A precision bit that will open the special oval head bolts used in Nespresso machines by various manufacturers (Jura, Krups, Delonghi, AEG, Siemens, Magimix and others). The bit can be used as-is as a hand tool, or you can use it with any 1/4" bit driver by removing the ring. Material: 303 Stainless Steel (non-magnetic). Long-life steel. Designed and precision made in the USA. ',
      imageOne: './images/service-tool-bit.jpg',
      images: ['./images/service-tool-bit.jpg','./images/service-tool-bit-2.jpg'],
      altText: 'Jura Capresso Nespresso Service Tool Bit for Magnetic Handle',
      productid: '39902',
    },
    {
      title: 'Jura Nespresso Professional Shop Tool Kit - Oval head w/ WIHA Handle & Torx bits',
      price: '24.95',
      description: 'A driver and shop quality bits that will open all the special screws used in most Jura, Jura Capresso, Delonghi, Nespresso, Starbucks Verismo, Magimix, Franke, Siemens, Krups and AEG machines. The set consists of: 416 Stainless Steel Fully Magnetic Oval Head bit. Custom manufactured for us by a professional CNC shop in USA. Wiha (Germany) T10 Torx bit Wiha (Germany) T15 Torx bit Wiha (Germany) T20 Torx bit Wiha (Germany) PROturn 48400. High quality durable magnetic 1/4 hex driver handle with strong professional grade magnet The kit contains all the three Torx sizes that are commonly used in these machines. The Torx bit are hardened tool steel and made in Germany by Wiha.',
      imageOne: './images/shop-tool-kit-oval-head.jpg',
      images: ['./images/shop-tool-kit-oval-head.jpg', './images/shop-tool-kit-oval-head-2.jpg', './images/shop-tool-kit-oval-head-3.jpg', './images/shop-tool-kit-oval-head-4.jpg',],
      altText: 'Jura Nespresso Professional Shop Tool Kit - Oval head w/ WIHA Handle & Torx bits',
      productid: '39912',
    },
    {
      title: 'Jura Capresso Service Repair Tool Key - Open Security Oval Head Screws',
      price: '12.95',
      description: 'A stainless steel precision bit that will open the special oval head screws used in most Jura, Jura Capresso, Nespresso, Krups and AEG machines. The bit can be used as-is as a hand tool, or you can use it with any 1/4" bit driver by removing the ring.  Material: 303 Stainless Steel (non-magnetic). Long-life steel. Designed and precision made in the USA.',
      imageOne: './images/service-repair-key.jpg',
      images: ['./images/service-repair-key.jpg', './images/service-repair-key-2.jpg', './images/service-repair-key-3.jpg', './images/service-repair-key-4.jpg', './images/service-repair-key-5.jpg'],
      altText: 'Jura Capresso Service Repair Tool Key - Open Security Oval Head Screws',
      productid: '39901',
    },
    {
      title: 'Jura Capresso OEM Brew Group O-ring set w/Oval Head Service Key Tool',
      price: '29.95',
      description: 'A set of O-rings for the Eugster Frismag brew group used in most Jura, Jura Capresso, and AEG Espresso machines and the oval head tool needed for some machines. These are the new improved red O-rings that Jura has been using since 2008 for the upper and lower piston of the brewing group. They are a direct factory replacement/improvement for the old black O-rings and are more service friendly thanks to only one size needed. (The black O-rings were less flexible and required you to use different sizes for the upper and lower piston).',
      imageOne: './images/o-ring-set-key-tool.jpg',
      images: ['./images/o-ring-set-key-tool.jpg', './images/o-ring-set-key-tool-2.jpg'],
      altText: 'Jura Capresso OEM Brew Group O-ring set w/Oval Head Service Key Tool',
      productid: '39910',
    },
    {
      title: 'Jura Capresso OEM Brew Group O-ring gasket seal set (no service tool)',
      price: '19.95',
      description: 'A set of O-rings for the Eugster Frismag brew group used in most Jura, Jura Capresso, and AEG Espresso machines. These are the new improved red O-rings that Jura has been using since 2008 for the upper and lower piston of the brewing group. They are a direct factory replacement/improvement for the old black O-rings and are more service friendly thanks to only one size needed. (The black O-rings were less flexible and required you to use different sizes for the upper and lower piston).',
      imageOne: './images/o-ring-set.jpg',
      images: ['./images/o-ring-set.jpg', './images/o-ring-set-2.jpg'],
      altText: 'Jura Capresso OEM Brew Group O-ring gasket seal set (no service tool)',
      productid: '39909',
    },
    {
      title: 'Espresso machine brew group O-ring seal grease DOW CORNING MOLYKOTE 111',
      price: '5.95',
      description: 'A 6 gram bag of Dow Corning 111 valve lubricant and sealant grease. This grease is NSF/ANSI 51/61 certified and safe for use in food processing and in your coffee maker. (This is the exact same grease as the OKS 1110 brand grease that is used for servicing Jura Capresso machines in Europe).',
      imageOne: './images/dow-corning-grease.jpg',
      images: ['./images/dow-corning-grease.jpg', './images/dow-corning-grease-2.jpg'],
      altText: 'Espresso machine brew group O-ring seal grease DOW CORNING MOLYKOTE 111',
      productid: '39904',
    },
    {
      title: 'Jura Capresso OEM Cherry D45X Micro Switch (for Grounds/Tray Error)',
      price: '8.90',
      description: 'OEM Jura p/n 65676 micro switch (Cherry D45X). If your machine is stuck on "Empty Grounds" or "Tray Missing", then this switch probably is what you need to fix the problem.',
      imageOne: './images/cherry-micro-switch.jpg',
      images: ['./images/cherry-micro-switch.jpg', './images/cherry-micro-switch-2.jpg'],
      altText: 'Jura Capresso OEM Cherry D45X Micro Switch. Fix EMPTY GROUNDS/TRAY MISSING error',
      productid: '39906',
    },
    {
      title: 'Espresso brew group O-ring seal grease DOW CORNING MOLYKOTE 111 (3pk)',
      price: '9.95',
      description: 'A 6 gram bag of Dow Corning 111 valve lubricant and sealant grease. This grease is NSF/ANSI 51/61 certified and safe for use in food processing and in your coffee maker. (This is the exact same grease as the OKS 1110 brand grease that is used for servicing Jura Capresso machines in Europe).',
      imageOne: './images/dow-corning-grease-3pk.jpg',
      images: ['./images/dow-corning-grease-3pk.jpg', './images/dow-corning-grease-2.jpg'],
      altText: 'Espresso machine brew group O-ring seal grease DOW CORNING MOLYKOTE 111',
      productid: '39911',
    },
  ];

  // BMT Micro shopping cart buttons
  $scope.bmtCheckout = function(productID) {
		bmt_checkout(productID, 3);
	}
	$scope.bmtAddToCart = function(productID) {
		bmt_addtocart(productID);
	}

});

// Scroll to top button
$(document).scroll(function() {
	var y = $(this).scrollTop();
	if (y >= 75) {
		$('#topcontrol').fadeIn();
	} else {
		$('#topcontrol').fadeOut();
	}
});

$("#topcontrol").click(function() {
	$('html, body').animate({
		scrollTop: $("#primary").offset().top
	}, 'slow')
})

// When you click everywhere in the document, open navbar collapses
$(document).click(function (event) {
  if (!$(event.target).is('.navbar-collapse *')) {
    // Collapse every *navbar-collapse*
    $('.navbar-collapse').collapse('hide');
  }
});
