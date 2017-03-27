var AFRAME = require('aframe');
require('aframe-daydream-controller-component');
require('aframe-gradient-sky');
require('aframe-ui-widgets');
require('aframe-dev-components');
require('networked-aframe');
require('./multiuser')(AFRAME);

AFRAME.registerComponent('game', {
  init: function () {
    var self = this;

    var startButton = document.querySelector('#start');
    startButton.addEventListener('click', function (e) {
      console.log('start clicked!');
    });

    var gopherBoxes = this.gopherBoxes = Array.prototype.slice.call(document.querySelectorAll('a-entity.gopherBox'));

    gopherBoxes.forEach(function (gopher) {
      gopher.children[0].addEventListener('raycaster-intersected', self.handleIntraction);
      gopher.children[0].addEventListener('click', self.handleIntraction);
    });

    var popGopher = function () {
      var i = Math.floor(Math.random() * gopherBoxes.length);
      var gopher = gopherBoxes[i];
      var mixin = 'gopher';
      if (Math.random() >= 0.5) mixin += ' up';
      gopher.children[0].setAttribute('mixin', mixin);
    };

    var randomTimeout = function () {
      popGopher();
      var random = Math.round(Math.random() * (1000 - 100)) + 100;
      setTimeout(randomTimeout, random);
    };

    randomTimeout();

    this.hammer = document.querySelector('#hammer-head');
  },

  handleIntraction: function (e) {
    var target = e.detail.target;
    if (target.getAttribute('mixin') === 'gopher up') {
      target.setAttribute('mixin', 'gopher');
      console.log('hit!');
    }
  },

  tick: function () {
  }
});
