
var people = (function() {
  var people = ['Maciek', 'Pat', 'Tom'];

  // cache DOM
  var $el = $('#peopleModule');
  var $button = $el.find('button');
  var $input = $el.find('input');
  var $ul = $el.find('ul');
  var template = $el.find('#people-template').html();

  // bind events
  $button.on('click', addPerson);
  $ul.delegate('i.del', 'click', deletePerson);

  render();

  function render() {
    $ul.html(Mustache.render(template, {people: people}));
  };

  function addPerson() {
    people.push($input.val());
    render();
    $input.val('');
  }

  function deletePerson(event) {
    var $remove = $(event.target).closest('li');
    var i = $ul.find('li').index($remove);

    people.splice(i, 1);
    render();
  }

  return {
    addPerson: addPerson,
    deletePerson: deletePerson 
  };

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
