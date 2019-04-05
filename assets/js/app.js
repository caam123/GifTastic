
var bands = ["George Michael", "Erasure", "Pet Shop Boys", "OMD", "Madonna"];
//var apikey = "I2RjtQO6f9dyGFX4Yt6r1GKXbWD0gU1w";
var apikey = "dc6zaTOxFJmzC";

// 1. Funcion Display Buttons - Aparecen en la página
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


// 2. Funcion addBand que agrega nuevo boton segun el input > Triggers displayButtons()

$("#addBand").on("click", function(event){
    event.preventDefault();

    var band = $("#searchQuery").val().trim();

    bands.push(band);

    displayButtons();
    //Limpiar la barra buscadora
    $("#searchQuery").val("");

});

// ===== Comentario importante!!! dentro de .on ( ".botones") ayuda a descender del id de botones list y filtrar a través de la clase, por alguna razon no podia hacerlo de la forma de siempre ===== ¿? //


$("#botonesList").on("click", ".botones", function(){
   $("#GifSection").empty();
    
    var inputBand = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ inputBand+ "&api_key=" + "I2RjtQO6f9dyGFX4Yt6r1GKXbWD0gU1w&limit=5"
    console.log(queryURL);

    $.ajax({
        url:queryURL,
        method: "GET"
    })
    .then(function(response){
        console.log(response);
        var imgUrl = response.data[0].images.fixed_height_still.url;
        console.log(imgUrl);

        var gifContainer = $("<div>");
            gifContainer.addClass("gifContainer")

    
        var gifThumb = $("<div>");
            gifThumb.addClass("gifThumb");

        var bandGif = $("<img>");
            bandGif.attr("src", imgUrl);

        var gifButtons = $("<div>");
            gifButtons.addClass("gifButtons");
        var pButtons = $("<p>");
            pButtons.addClass("rating");
            pButtons.text("Rating es____");
        
        var buttonSave = $("<button>");
            buttonSave.addClass("saveFav save");

         var buttonFave = $("<button>");
            buttonFave.addClass("saveFav fav");   
            
        var saveIcon = $("<i>");
            saveIcon.addClass("far fa-save");
        
        var heartIcon = $("<i>");
            heartIcon.addClass("far fa-heart");

        buttonSave.append(saveIcon);
        buttonFave.append(heartIcon);
 
        gifButtons.append(pButtons);
        gifButtons.append(buttonSave);
        gifButtons.append(buttonFave);

        $("#GifSection").append(gifContainer);     
        $(".gifContainer").append(gifThumb);
        $(".gifContainer").append(gifButtons);
        $(".gifThumb").append(bandGif);


        /*$(".gifContainer").append(pButtons);
        $(".gifContainer").append(buttonFave);
        $(".gifContainer").append(buttonSave);*/


    })


});





// ===== LLAMADA DE FUNCIONES =====

displayButtons();
