// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    merc = function(massa){
      
      alert("Peso em mercurio é " + massa*3.7);

    }

    venu = function(massa){
      
      alert("Peso em venus é " + massa*8.87);
    }

    terr = function(massa){
      
      alert("Peso na terra é " + massa*9.807);
    }

    mart = function(massa){
      
      alert("Peso em marte é " + massa*3.711);
    }

    jupi = function(massa){
      
      alert("Peso em jupiter é " + massa*24.79);
    }

    satu = function(massa){
      
      alert("Peso em saturno é " + massa*10.44);
    }

    uran = function(massa){
      
      alert("Peso em urano é " + massa*8.69);
    }

    netu = function(massa){
      
      alert("Peso em netuno é " + massa*11.15);
    }

    plut = function(massa){
      
      alert("Peso em plutao é " + massa*0.62);
    }
   
  });
})
