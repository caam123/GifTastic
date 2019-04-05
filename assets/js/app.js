
var bands = ["George Michael", "Erasure", "Pet Shop Boys", "OMD", "Madonna"];



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
    console.log("click");

    var inputBand = $(this).attr("data-name");

});





// ===== LLAMADA DE FUNCIONES =====

displayButtons();
