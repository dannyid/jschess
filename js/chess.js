$( "img" ).click(function(evt) {
    var $parent = $(evt.target).parent();
    console.log($parent.css('background-color'));
    if ($parent.css("background-color") !== "rgb(255, 0, 0)") {
        $parent.css({"background-color": "red"});
    } else {
        $parent.css({"background-color": $parent.hasClass("black") ? "grey" : "white" });
    };
});
