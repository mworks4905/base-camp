'use strict'

$(document).ready(function() {

    $('.deleteBtn').click(function(event) {
        var value = $(this).attr('value');
        $.ajax({
            contentType: 'application/json',
            url: `/posts/delete`,
            method: 'DELETE',
            dataType: 'json',
            data: JSON.stringify({
                value
            }),
        }).done(() => {
            window.location = '/posts'
        }).fail(err => {
            window.location = '/posts'
        })
    })
})