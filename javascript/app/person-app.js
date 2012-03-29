(function($) {
  
  PersonApp = {
    View  : {},
    Model : {}
  }
  
  PersonApp.Instance = function(data) {
    this.model = new PersonApp.Model.Person(data),
    
    this.render = function() {
      var personView = new PersonApp.View.Person({ model: this.model });
      $('.backbone').html(personView.render().el);
    }
    
  }
  
}(jQuery));