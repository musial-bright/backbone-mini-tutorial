(function($) {
  
  PersonApp = {
    View  : {},
    Model : {}
  }
  
  PersonApp.Instance = function(data) {
    this.personModel = new PersonApp.Model.Person(data),
    
    this.render = function(selector) {
      this.personView = new PersonApp.View.Person({ model: this.personModel });
      $(selector).html(this.personView.render().el);
    }
    
  }
  
}(jQuery));