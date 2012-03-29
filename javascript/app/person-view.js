(function($) {
  
  PersonApp.View.Person = Backbone.View.extend({
    tagName: "div",
    className: "person",

    initialize: function() {
      _.bindAll(this, 'render');
      this.model = this.options.model;
      this.model.bind('change:name', this.render);
      this.model.bind('change:name', this.render);
      this.model.bind('change:birthday', this.render);
      this.model.bind('change:occupation', this.render);
      this.model.bind('change:nationality', this.render);
      this.model.bind('change:active_years', this.render);
    },
    
    render: function() {
      this.template = _.template($('#person_template').html());
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    }

  });
  
}(jQuery));