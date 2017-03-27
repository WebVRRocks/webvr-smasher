module.exports = AFRAME => {
  require('socket.io-client');

  AFRAME.registerComponent('multiuser', {
    init: function () {
      console.log('multiuser');
    },

    tick: function () {
    }
  });
};
