(function($) {
  
  PersonApp.Model.Person = Backbone.Model.extend({
    initialize: function(data) {
      this.set({ name: data.name });
      this.set({ birthday: data.birthday });
      this.set({ occupation: data.occupation });
      this.set({ nationality: data.nationality });
      this.set({ active_years: data.active_years });
    }
  });
  
}(jQuery));