$(function() {
    $("button").on("click", function() {
        $.ajax({
            url: "/addAPI",
            type: "post",
            data: {
                name: $(".name").val(),
                age: $(".age").val()
            },
            success: function(result) {
                console.log(result);
            }
        });
    });
});