$(function(){
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    type: 'GET',
    dataType: 'JSON'
  })
  .done(function(data) {
    $.each(data, function(index, val) {
      $("#home").append(html(val));
    });
  })
  .fail(function() {
    console.log("error");
  })


  function html(data){
    return `<div class="col-md-4">
      <h3>${data.title}</h3>
      <p>${data.body}</p>
      <button type="button" class="btn btn-danger">Save Post</button>
    </div>`
  }

})