
$( "td" ).click(function(evt) {
    var cell = $(evt.currentTarget);
    console.log(evt);
    console.log($(evt));
    console.log(evt.target);
    console.log(cell);
    if (cell.css("background-color") !== "rgb(255, 0, 0)") {
        cell.css({"background-color": "red"});
    } else {
        cell.css({"background-color": cell.hasClass("black") ? "grey" : "white" });
    };
});


//$( "img" ).click(function(evt) {
//    var $parent = $(evt.target).parent();
//    console.log($parent.css('background-color'));
//    if ($parent.css("background-color") !== "rgb(255, 0, 0)") {
//        $parent.css({"background-color": "red"});
//    } else {
//        $parent.css({"background-color": $parent.hasClass("black") ? "grey" : "white" });
//    };
//});
