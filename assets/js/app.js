
var bands = ["George Michael", "Erasure", "Pet Shop Boys", "OMD", "Madonna"];

function displayButtons(){

    $("#botonesList").empty();

    for (var i = 0; i < bands.length; i++) {
        
        var button = $("<button>");
        button.addClass("botones");
        button.attr("data-name", bands[i]);
        button.text(bands[i]);
        $("#botonesList").append(button);

    }
};

$()






displayButtons();
