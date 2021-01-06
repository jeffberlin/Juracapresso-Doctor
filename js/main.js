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
      altText: 'Jura Capresso Service Repair Tool Key - Open Security Oval Head Screws'
    }
  ];
});
