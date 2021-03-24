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

    $("#top10").click(function () {
        $.get("https://randomuser.me/api/?results=10.", function (data) {
            var results = data.results;
            for (var i = 0; i < results.length; i++) {
                var name = results[i].name;
                var age = results[i].dob;
                var email = results[i].email;
                var location = results[i].location;
                //Create empty row
                var info = "";
                //Load info into row var
                info += "<tr>";
                info += "<td>" + `${i + 1}` + "</td>";
                info += "<td>" + `${name.first} ${name.last}` + "</td>";
                info += "<td>" + `${age.age}` + "</td>";
                info += "<td>" + `${location.country}` + "</td>";
                info += "</tr>";
                $("#topgolf").append(info);
            }
        });
        $("#topgolf").show();
    });
});
