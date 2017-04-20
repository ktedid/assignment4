// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

(function () {
  $('.flexsearch-input').keyup(function () {
    $.ajax({
      type: 'GET',
      url: "http://www.mattbowytz.com/simple_api.json?data=all",
      dataType: 'json'
    }).done(function (data) {
      var searchResults = '';
      var searchField = $('.flexsearch-input').val();
      searchField = searchField.toLowerCase();
      $('.results').html("");
      $.each(data.data, function (key, value) {
        searchResults += '<ul>';
        $.each(data.data[key], function (index, value) {
          if (value.toLowerCase().indexOf(searchField) === 0) {
            searchResults += '<li> <a href="http://google.com/#q=' + value + '" target="_blank">' + value + '</a></li>';
          }
        });
        searchResults += '</ul>';
      });
      if (searchField == '') {
        $('.results').html("");
      } else {
        $('.results').html(searchResults);
      }      
    });
  });
})();
