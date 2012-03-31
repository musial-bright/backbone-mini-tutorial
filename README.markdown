# How to create this simple backbone app?

### 1. Get the libraries

* jQuery: http://jquery.com
* Underscore lib: http://documentcloud.github.com/underscore/underscore-min.js
* Backbone lib: http://documentcloud.github.com/backbone/backbone-min.js

### 2. Create a page

To render the person view a simple HTML page is needed: _index.html_.
All the libraries should be referenced: jQuery, Underscore and Backbone 
(note the order!).

### 3. Create app structure

For the backbone app we need a view and a model for the person data. Each will 
have its own file in the javascript/app folder:
_person-view.js_, _person-model.js

For the view a template is needed, lets call it _person_template_.
The easiest way to do this is to put it  at the end of the _body_ tag in the
_index.html_ file.

To tighten everything up, a _person-app.js_ is needed where the view and the model
will be instantiated.

### 4. Integrate the app into the page

Create a new instance of the person app which is defined in the 
_person-app.js_ file like this:

````javascript
window.personApp = new PersonApp.Instance(data);
````

Now execute the _render_ function with the _.render_backbone_here_ selector

````javascript
window.personApp.render('.render_backbone_here')
````

### What's missing?

What you have seen till now is a very simple backbone app which should already
help you to write nice javascript apps. The backbone model is a much powerful
class. It implements a REST client to access a RESTful web service, so you could
create, fetch, update, and delete you data using something like

````javascript
// save the model data
model.save()
````

There is also a routing implementation, so the backbone app reads its state from
the url.

After you familiarized with the view and model implementation I recommend to 
study this topics.