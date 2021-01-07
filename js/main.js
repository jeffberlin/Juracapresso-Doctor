var app = angular.module('fullApp', []);
app.controller('appCtrl', function($scope, $document) {
  $scope.productCardInfo = [
    {
      title: 'Jura Capresso Nespresso Service Tool Bit for Magnetic Handle',
      price: '10.95',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      imageOne: './images/service-tool-bit.jpg',
      imageTwo: './images/service-tool-bit-2.jpg',
      altText: 'Jura Capresso Nespresso Service Tool Bit for Magnetic Handle'
    },
    {
      title: 'Jura Nespresso Professional Shop Tool Kit - Oval head w/ WIHA Handle & Torx bits',
      price: '24.95',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      imageOne: './images/shop-tool-kit-oval-head.jpg',
      imageTwo: './images/shop-tool-kit-oval-head-2.jpg',
      altText: 'Jura Nespresso Professional Shop Tool Kit - Oval head w/ WIHA Handle & Torx bits'
    },
    {
      title: 'Jura Capresso Service Repair Tool Key - Open Security Oval Head Screws',
      price: '9.95',
      description: '',
      imageOne: './images/service-repair-key.jpg',
      imageTwo: './images/service-repair-key-2.jpg',
      altText: 'Jura Capresso Service Repair Tool Key - Open Security Oval Head Screws'
    },
    {
      title: 'Jura Capresso OEM Brew Group O-ring set w/Oval Head Service Key Tool',
      price: '29.95',
      description: 'A set of O-rings for the Eugster Frismag brew group used in most Jura, Jura Capresso, and AEG Espresso machines and the oval head tool needed for some machines. These are the new improved red O-rings that Jura has been using since 2008 for the upper and lower piston of the brewing group. They are a direct factory replacement/improvement for the old black O-rings and are more service friendly thanks to only one size needed. (The black O-rings were less flexible and required you to use different sizes for the upper and lower piston).',
      imageOne: './images/o-ring-set-key-tool.jpg',
      imageTwo: './images/o-ring-set-key-tool-2.jpg',
      altText: 'Jura Capresso OEM Brew Group O-ring set w/Oval Head Service Key Tool'
    },
    {
      title: 'Jura Capresso OEM Brew Group O-ring gasket seal set (no service tool)',
      price: '19.95',
      description: 'A set of O-rings for the Eugster Frismag brew group used in most Jura, Jura Capresso, and AEG Espresso machines. These are the new improved red O-rings that Jura has been using since 2008 for the upper and lower piston of the brewing group. They are a direct factory replacement/improvement for the old black O-rings and are more service friendly thanks to only one size needed. (The black O-rings were less flexible and required you to use different sizes for the upper and lower piston).',
      imageOne: './images/o-ring-set.jpg',
      imageTwo: './images/o-ring-set-2.jpg',
      altText: 'Jura Capresso OEM Brew Group O-ring gasket seal set (no service tool)'
    },
    {
      title: 'Duplex Decora insert for Neutrik "D" Series XLR Cannon or SpeakOn Paintable',
      price: '8.95',
      description: 'Decora insert in white. The insert has been milled to fit two Neutrik XLR and/or SpeakOn connectors. Suitable mounting hardware (M3 screws and nuts) are included.',
      imageOne: './images/duplex-decora-insert.jpg',
      imageTwo: './images/duplex-decora-insert-2.jpg',
      altText: 'Duplex Decora insert for Neutrik "D" Series XLR Cannon or SpeakOn Paintable'
    },
    {
      title: 'Espresso machine brew group O-ring seal grease DOW CORNING MOLYKOTE 111',
      price: '2.50',
      description: 'A 6 gram bag of Dow Corning 111 valve lubricant and sealant grease. This grease is NSF/ANSI 51/61 certified and safe for use in food processing and in your coffee maker. (This is the exact same grease as the OKS 1110 brand grease that is used for servicing Jura Capresso machines in Europe).',
      imageOne: './images/dow-corning-grease.jpg',
      imageTwo: './images/dow-corning-grease-2.jpg',
      altText: 'Espresso machine brew group O-ring seal grease DOW CORNING MOLYKOTE 111'
    },
    {
      title: 'Jura Capresso OEM Cherry D45X Micro Switch (for Grounds/Tray Error)',
      price: '8.90',
      description: 'OEM Jura p/n 65676 micro switch (Cherry D45X). If your machine is stuck on "Empty Grounds" or "Tray Missing", then this switch probably is what you need to fix the problem.',
      imageOne: './images/cherry-micro-switch.jpg',
      imageTwo: './images/cherry-micro-switch-2.jpg',
      altText: 'Jura Capresso OEM Cherry D45X Micro Switch. Fix EMPTY GROUNDS/TRAY MISSING error'
    },
    {
      title: 'Decora insert for Neutrik "D" Series XLR (Cannon) or SpeakOn Paintable',
      price: '5.95',
      description: 'A Decora insert in white. The insert has been milled to fit most regular size Neutrik XLR and SpeakOn connectors. Suitable mounting hardware (M3 screws and nuts) are included.',
      imageOne: './images/duplex-decora-insert-single.jpg',
      imageTwo: './images/duplex-decora-insert-single-2.jpg',
      altText: 'Decora insert for Neutrik "D" Series XLR (Cannon) or SpeakOn Paintable'
    }
  ];
});
