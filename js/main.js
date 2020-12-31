var app = angular.module('fullApp', []);
app.controller('appCtrl', function($scope, $document) {
  $scope.productCardInfo = [
    {
      title: 'Jura Capresso Nespresso Service Tool Bit for Magnetic Handle',
      price: '$10.95',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      images: ['./images/service-tool-bit.jpg', './images/service-tool-bit-2.jpg'],
      // imageTwo: './images/service-tool-bit-2.jpg',
      altText: 'Jura Capresso Nespresso Service Tool Bit for Magnetic Handle'
    },
    {
      title: 'Jura Nespresso Professional Shop Tool Kit - Oval head w/ WIHA Handle & Torx bits',
      price: '$24.95',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      images: ['./images/shop-tool-kit-oval-head.jpg', './images/shop-tool-kit-oval-head-2.jpg'],
      // imageTwo: './images/shop-tool-kit-oval-head-2.jpg',
      altText: 'Jura Nespresso Professional Shop Tool Kit - Oval head w/ WIHA Handle & Torx bits'
    },
  ]
})
