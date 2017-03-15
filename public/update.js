$(function() {
    $("button").on("click", function() {
        $.ajax({
            url: "/updateAPI",
            type: "post",
            data: {
                id: $(".id").val(),
                name: $(".name").val(),
                age: $(".age").val()
            },
            success: function(result) {
                console.log(result);
            }
        });
    });
});