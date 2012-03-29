$(document).ready(function() {
  
  var tutorial = {
    renderSource: function() {
      $('.content').html($('textarea.source').val());
    }
  }
  
  $('textarea.source').keyup(function() {
    tutorial.renderSource();
  });
  
  tutorial.renderSource();
  
});

