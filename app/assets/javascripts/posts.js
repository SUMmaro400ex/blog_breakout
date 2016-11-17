$(function(){
  $("#make-new-comment").on("click", function(e){
    e.preventDefault();
    var url = $(this).closest("form").attr("action");
    var method = $(this).closest("form").attr("method");
    var body = $(this).closest("form").find("#comment_body").val();
    // debugger;
    $.ajax({
      url: url,
      type: method,
      dataType: 'JSON',
      data: {
        comment: { body: body }
      }
    })
    .done(function(data){
      $(".comments").append("<h3>" + data.body + "</h3>");
      $("#comment_body").val("");
    })
  })
});