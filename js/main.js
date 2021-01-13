var app = angular.module('fullApp', []);
app.controller('appCtrl', function($scope, $document) {
  $scope.productCardInfo = [
    {
      title: 'Jura Capresso Nespresso Service Tool Bit for Magnetic Handle',
      price: '12.95',
      description: 'A stanless steel tool bit that will open the special oval head screws used in most Jura, Jura Capresso, Nespresso, Krups and AEG machines. This bit is manufactured from 416 Stainless Steel. 416 SS has the characteristic of being magnetic and stays put in a driver handle with magnet unlike our 303 SS tool.',
      imageOne: './images/service-tool-bit.jpg',
      imageTwo: './images/service-tool-bit-2.jpg',
      altText: 'Jura Capresso Nespresso Service Tool Bit for Magnetic Handle',
      productid: '39902'
    },
    {
      title: 'Jura Nespresso Professional Shop Tool Kit - Oval head w/ WIHA Handle & Torx bits',
      price: '24.95',
      description: 'a driver and shop quality bits that will open all the special screws used in most Jura, Jura Capresso, Delonghi, Nespresso, Starbucks Verismo, Magimix, Franke, Siemens, Krups and AEG machines. The set consists of: 416 Stainless Steel Fully Magnetic Oval Head bit. Custom manufactured for us by a professional CNC shop in USA. Wiha (Germany) T10 Torx bit Wiha (Germany) T15 Torx bit Wiha (Germany) T20 Torx bit Wiha (Germany) PROturn 48400. High quality durable magnetic 1/4 hex driver handle with strong professional grade magnet The kit contains all the three Torx sizes that are commonly used in these machines. The Torx bit are hardened tool steel and made in Germany by Wiha.',
      imageOne: './images/shop-tool-kit-oval-head.jpg',
      imageTwo: './images/shop-tool-kit-oval-head-2.jpg',
      altText: 'Jura Nespresso Professional Shop Tool Kit - Oval head w/ WIHA Handle & Torx bits',
      productid: '39912'
    },
    {
      title: 'Jura Capresso Service Repair Tool Key - Open Security Oval Head Screws',
      price: '12.95',
      description: '',
      imageOne: './images/service-repair-key.jpg',
      imageTwo: './images/service-repair-key-2.jpg',
      altText: 'Jura Capresso Service Repair Tool Key - Open Security Oval Head Screws',
      productid: '39901'
    },
    {
      title: 'Jura Capresso OEM Brew Group O-ring set w/Oval Head Service Key Tool',
      price: '29.95',
      description: 'A set of O-rings for the Eugster Frismag brew group used in most Jura, Jura Capresso, and AEG Espresso machines and the oval head tool needed for some machines. These are the new improved red O-rings that Jura has been using since 2008 for the upper and lower piston of the brewing group. They are a direct factory replacement/improvement for the old black O-rings and are more service friendly thanks to only one size needed. (The black O-rings were less flexible and required you to use different sizes for the upper and lower piston).',
      imageOne: './images/o-ring-set-key-tool.jpg',
      imageTwo: './images/o-ring-set-key-tool-2.jpg',
      altText: 'Jura Capresso OEM Brew Group O-ring set w/Oval Head Service Key Tool',
      productid: '39910'
    },
    {
      title: 'Jura Capresso OEM Brew Group O-ring gasket seal set (no service tool)',
      price: '19.95',
      description: 'A set of O-rings for the Eugster Frismag brew group used in most Jura, Jura Capresso, and AEG Espresso machines. These are the new improved red O-rings that Jura has been using since 2008 for the upper and lower piston of the brewing group. They are a direct factory replacement/improvement for the old black O-rings and are more service friendly thanks to only one size needed. (The black O-rings were less flexible and required you to use different sizes for the upper and lower piston).',
      imageOne: './images/o-ring-set.jpg',
      imageTwo: './images/o-ring-set-2.jpg',
      altText: 'Jura Capresso OEM Brew Group O-ring gasket seal set (no service tool)',
      productid: '39909'
    },
    {
      title: 'Duplex Decora insert for Neutrik "D" Series XLR Cannon or SpeakOn Paintable',
      price: '8.95',
      description: 'Decora insert in white. The insert has been milled to fit two Neutrik XLR and/or SpeakOn connectors. Suitable mounting hardware (M3 screws and nuts) are included.',
      imageOne: './images/duplex-decora-insert.jpg',
      imageTwo: './images/duplex-decora-insert-2.jpg',
      altText: 'Duplex Decora insert for Neutrik "D" Series XLR Cannon or SpeakOn Paintable',
      productid: ''
    },
    {
      title: 'Espresso machine brew group O-ring seal grease DOW CORNING MOLYKOTE 111',
      price: '5.95',
      description: 'A 6 gram bag of Dow Corning 111 valve lubricant and sealant grease. This grease is NSF/ANSI 51/61 certified and safe for use in food processing and in your coffee maker. (This is the exact same grease as the OKS 1110 brand grease that is used for servicing Jura Capresso machines in Europe).',
      imageOne: './images/dow-corning-grease.jpg',
      imageTwo: './images/dow-corning-grease-2.jpg',
      altText: 'Espresso machine brew group O-ring seal grease DOW CORNING MOLYKOTE 111',
      productid: '39904'
    },
    {
      title: 'Jura Capresso OEM Cherry D45X Micro Switch (for Grounds/Tray Error)',
      price: '8.90',
      description: 'OEM Jura p/n 65676 micro switch (Cherry D45X). If your machine is stuck on "Empty Grounds" or "Tray Missing", then this switch probably is what you need to fix the problem.',
      imageOne: './images/cherry-micro-switch.jpg',
      imageTwo: './images/cherry-micro-switch-2.jpg',
      altText: 'Jura Capresso OEM Cherry D45X Micro Switch. Fix EMPTY GROUNDS/TRAY MISSING error',
      productid: '39906'
    },
    {
      title: 'Decora insert for Neutrik "D" Series XLR (Cannon) or SpeakOn Paintable',
      price: '5.95',
      description: 'A Decora insert in white. The insert has been milled to fit most regular size Neutrik XLR and SpeakOn connectors. Suitable mounting hardware (M3 screws and nuts) are included.',
      imageOne: './images/duplex-decora-insert-single.jpg',
      imageTwo: './images/duplex-decora-insert-single-2.jpg',
      altText: 'Decora insert for Neutrik "D" Series XLR (Cannon) or SpeakOn Paintable',
      productid: ''
    }
  ];
});
