SC.initialize({
  client_id: 'a3e059563d7fd3372b49b37f00a00bcf'

});

$(document).ready(function() {



  SC.stream('/tracks/316859203', function(sound) {
    $('#start1').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop1').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });


  SC.stream('/tracks/354663899', function(sound) {
    $('#start2').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop2').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });



  SC.stream('/tracks/181294675', function(sound) {
    $('#start3').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop3').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });



  SC.stream('/tracks/199316026', function(sound) {
    $('#start4').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop4').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });



  SC.stream('/tracks/298828497', function(sound) {
    $('#start5').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop5').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });



  SC.stream('/tracks/242717783', function(sound) {
    $('#start6').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop6').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });



  SC.stream('/tracks/339606057', function(sound) {
    $('#start7').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop7').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });



  SC.stream('/tracks/93186509', function(sound) {
    $('#start8').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop8').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });


  SC.stream('/tracks/130751350', function(sound) {
    $('#start9').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop9').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });


});
