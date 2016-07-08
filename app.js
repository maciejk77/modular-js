
(function() {

  var people = {
    people: ['Maciek', 'Pat', 'Tom'],
    init: function() {
      this.cacheDom();
      this.render();
    },
    cacheDom: function() {
      this.$el = $('#peopleModule');
      this.$button = this.$el.find('button');
      this.$input = this.$el.find('input');
      this.$ul = this.$el.find('ul');
      this.$template = this.$el.find('#people-template').html();
    },
    render: function() {
      var data = {
        people: this.people,
      };
      this.$ul.html(Mustache.render(this.$template, data));
    }
  };
  
  people.init();
})();





// SPAGHETTI CODE below 

// (function() {

//   var people = [];
//   var template = $('#people-template').html();

//   $('#peopleModule').find('button').on('click', function() {
//     people.push($('#peopleModule').find('input').val());
//     $('#peopleModule').find('input').val('');
//     // data for mustache template

//     var data = {
//       people: people,
//     };
//     $('#peopleModule').find('ul').html(Mustache.render(template, data));
//   });

//   $('#peopleModule').find('ul').delegate('i.del', 'click', function(e) {
//     var $remove = $(e.target).closest('li');
//     var i = $('#peopleModule').find('ul').find('li').index($remove);

//     $remove.remove();

//     people.splice(i, 1);
//   });

// })();
