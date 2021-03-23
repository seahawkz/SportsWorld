$(document).ready(function () {
    // Hide subcribe button
    $("#subscribe").click(function () {
        $("#sidebar3").hide();
    });
    // Show subcribe button
    $("#signup").click(function () {
        $("#sidebar3").show();
    });
    // Add 1 to score
    $("#njs").click(function () {
        var num = parseInt($.trim($(this).html()));
        $(this).html(++num);
    });
    $("#prs").click(function () {
        var num = parseInt($.trim($(this).html()));
        $(this).html(++num);
    });
    // Alert the game is over
    setTimeout(function () {
        alert("The Ninjas have won!");
    }, 13000);

    $("#get-data").click(function () {
        $.get("https://pokeapi.co/api/v2/pokemon", function (data) {});
    });
});
