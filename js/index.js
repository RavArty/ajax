console.log('Hello from the JavaScript console!');

// Your AJAX request here
// $.ajax({
//   url:
//     'http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=bcb83c4b54aee8418983c2aff3073b3b',
//   type: 'GET',
//   success: function(data) {
//     console.log('Your callback here!', data);
//   }
// });
// Add another console log here, outside your AJAX request

const fetchSuccess = data => console.log(data);
const fetchError = err => console.log(err);

const fetchData = () =>
  $.ajax({
    url:
      'http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=bcb83c4b54aee8418983c2aff3073b3b'
  });
// Note the implicit return!

fetchData()
  .then(fetchSuccess)
  .fail(fetchError);
