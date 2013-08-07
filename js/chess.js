$( "img" ).click(function() {
    if ($( this ).parent().css("background-color") !== "red") {
        $( this ).parent().css({"background-color": "red"});
    } else {
        $( this ).parent().css({"background-color": "black"});
    };
});
