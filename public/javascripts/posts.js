'use strict'

$(document).ready(function(){

  $('.deleteBtn').click(function(event){
    var value = $(this).attr('value');
    $.ajax({
      contentType: 'application/json',
      url: `/posts/delete`,
      method: 'DELETE',
      dataType: 'json',
      data: JSON.stringify({value}),
    }).done(() => {
      window.location = '/posts'
    }).fail(err => {
      window.location = '/posts'
    })
  })

//   $('.editBtn').click(function(event){
//     var title = $(this).attr('title');
//     var body = $(this).attr('body');
//     var value = $(this).attr('value');
//     // console.log(title + " " + body);
//     $.ajax({
//       contentType: 'application/json',
//       url: `/posts/editPost`,
//       method: 'PUT',
//       dataType: 'json',
//       data: JSON.stringify({
//         title: title,
//         body: body,
//         value: value
//       }),
//     }).done(() => {
//       window.location = '/posts/editPost'
//     }).fail(err => {
//       window.location = '/posts/editPost'
//     })
//   })
})
