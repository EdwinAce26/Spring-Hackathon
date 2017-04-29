$(document).ready( function() {

    $("#pic1").click (function() {
        var picSource = $("#pic1").attr("src");
        $("#gallery-main").attr("src",picSource);
    });
    
    $("#pic2").click (function() {
        var picSource = $("#pic2").attr("src");
        $("#gallery-main").attr("src",picSource);
    });
    
    $("#pic3").click (function() {
        var picSource = $("#pic3").attr("src");
        $("#gallery-main").attr("src",picSource);
    });

});
