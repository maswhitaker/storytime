Parse.initialize("uCZLgPcK91kjX9T7tPp0hERO3JyTUn5O6CsjtIj2", "hW06WNp47jdWGKjdbU5MdaZTfpBx2MacGNN9qfOZ");

var StartupView = Parse.View.extend({
  template: _.template($("#startup-template").html()),

  initialize: function(){
    this.render();
    $(".container").html(this.el);
  },
  render: function(){
    this.$el.html(this.template(this.model));
  }
});

var Page2View = Parse.View.extend({
  template: _.template($("#page2").html()),

  initialize: function(){
    this.render();
    $(".container").html(this.el);
  },
  render: function(){
    this.$el.html(this.template(this.model));
  }
});

var Page3View = Parse.View.extend({
  template: _.template($("#page3").html()),

  initialize: function(){
    this.render();
    $(".container").html(this.el);
  },
  render: function(){
    this.$el.html(this.template(this.model));
  }
});

var Page4View = Parse.View.extend({
  template: _.template($("#page4").html()),

  initialize: function(){
    this.render();
    $(".container").html(this.el);
  },
  render: function(){
    this.$el.html(this.template(this.model));
  }
});

var Page5View = Parse.View.extend({
  template: _.template($("#page5").html()),

  initialize: function(){
    this.render();
    $(".container").html(this.el);
  },
  render: function(){
    this.$el.html(this.template(this.model));
  }
});

var Page6View = Parse.View.extend({
  template: _.template($("#page6").html()),

  initialize: function(){
    this.render();
    $(".container").html(this.el);
  },
  render: function(){
    this.$el.html(this.template(this.model));
  }
});

var Page7View = Parse.View.extend({
  template: _.template($("#page7").html()),

  initialize: function(){
    this.render();
    $(".container").html(this.el);
  },
  render: function(){
    this.$el.html(this.template(this.model));
  }
});


var Router = Parse.Router.extend({
  routes:{
      "": "startup",
      "page2": "page2view",
      "page3": "page3view",
      "page4": "page4view",
      "page5": "page5view",
      "page6": "page6view",
      "page7": "page7view"
  },
  startup: function(){
      new StartupView();
  },
  page2view: function(){
      new Page2View();
  },
  page3view: function(){
      new Page3View();
  },
  page4view: function(){
      new Page4View();
  },
  page5view: function(){
      new Page5View();
  },
  page6view: function(){
      new Page6View();
  },
  page7view: function(){
      new Page7View();
  }
});

var approuter = new Router();

Parse.history.start();
